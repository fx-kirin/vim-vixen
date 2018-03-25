import messages from 'shared/messages';
import * as operationActions from 'background/actions/operation';
import * as commandActions from 'background/actions/command';
import * as settingActions from 'background/actions/setting';
import * as findActions from 'background/actions/find';
import * as tabActions from 'background/actions/tab';
import * as commands from 'shared/commands';

export default class BackgroundComponent {
  constructor(store) {
    this.store = store;

    browser.runtime.onMessage.addListener((message, sender) => {
      try {
        return this.onMessage(message, sender);
      } catch (e) {
        return browser.tabs.sendMessage(sender.tab.id, {
          type: messages.CONSOLE_SHOW_ERROR,
          text: e.message,
        });
      }
    });
  }

  onMessage(message, sender) {
    let settings = this.store.getState().setting;
    let find = this.store.getState().find;

    switch (message.type) {
    case messages.BACKGROUND_OPERATION:
      return this.store.dispatch(
        operationActions.exec(message.operation, sender.tab),
        sender);
    case messages.OPEN_URL:
      if (message.newTab) {
        return this.store.dispatch(
          commands.tabopenCommand(message.url, message.background,
            settings.value.openAdjacentTabs), sender);
      }
      return this.store.dispatch(
        tabActions.openToTab(message.url, sender.tab), sender);
    case messages.CONSOLE_ENTER_COMMAND:
      this.store.dispatch(
        commandActions.exec(message.text, settings.value),
        sender
      );
      return this.broadcastSettingsChanged();
    case messages.SETTINGS_QUERY:
      return Promise.resolve(this.store.getState().setting.value);
    case messages.CONSOLE_QUERY_COMPLETIONS:
      return commands.complete(message.text, settings.value);
    case messages.SETTINGS_RELOAD:
      this.store.dispatch(settingActions.load());
      return this.broadcastSettingsChanged();
    case messages.FIND_GET_KEYWORD:
      return Promise.resolve(find.keyword);
    case messages.FIND_SET_KEYWORD:
      this.store.dispatch(findActions.setKeyword(message.keyword));
      return Promise.resolve({});
    }
  }

  broadcastSettingsChanged() {
    return browser.tabs.query({}).then((tabs) => {
      for (let tab of tabs) {
        browser.tabs.sendMessage(tab.id, {
          type: messages.SETTINGS_CHANGED,
        });
      }
    });
  }
}
