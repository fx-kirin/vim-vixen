export default {
  source: 'json',
  json: `{
  "keymaps": {
    "0": { "type": "scroll.home" },
    ":": { "type": "command.show" },
    "o": { "type": "command.show.open", "alter": false },
    "O": { "type": "command.show.open", "alter": true },
    "t": { "type": "command.show.tabopen", "alter": false },
    "T": { "type": "command.show.tabopen", "alter": true },
    "w": { "type": "command.show.winopen", "alter": false },
    "W": { "type": "command.show.winopen", "alter": true },
    "b": { "type": "command.show.buffer" },
    "k": { "type": "scroll.vertically", "count": -1 },
    "j": { "type": "scroll.vertically", "count": 1 },
    "h": { "type": "scroll.horizonally", "count": -1 },
    "l": { "type": "scroll.horizonally", "count": 1 },
    "<C-Y>": { "type": "scroll.vertically", "count": -1 },
    "<C-E>": { "type": "scroll.vertically", "count": 1 },
    "<C-U>": { "type": "scroll.pages", "count": -0.5 },
    "<C-D>": { "type": "scroll.pages", "count": 0.5 },
    "<C-B>": { "type": "scroll.pages", "count": -1 },
    "<C-F>": { "type": "scroll.pages", "count": 1 },
    "gg": { "type": "scroll.top" },
    "G": { "type": "scroll.bottom" },
    "$": { "type": "scroll.end" },
    "d": { "type": "tabs.close" },
    "u": { "type": "tabs.reopen" },
    "K": { "type": "tabs.prev", "count": 1 },
    "J": { "type": "tabs.next", "count": 1 },
    "r": { "type": "tabs.reload", "cache": false },
    "R": { "type": "tabs.reload", "cache": true },
    "zi": { "type": "zoom.in" },
    "zo": { "type": "zoom.out" },
    "zz": { "type": "zoom.neutral" },
    "f": { "type": "follow.start", "newTab": false },
    "F": { "type": "follow.start", "newTab": true },
    "H": { "type": "navigate.history.prev" },
    "L": { "type": "navigate.history.next" },
    "[[": { "type": "navigate.link.prev" },
    "]]": { "type": "navigate.link.next" },
    "gu": { "type": "navigate.parent" },
    "gU": { "type": "navigate.root" },
    "y": { "type": "urls.yank" }
  },
  "search": {
    "default": "google",
    "engines": {
      "google": "https://google.com/search?q={}",
      "yahoo": "https://search.yahoo.com/search?p={}",
      "bing": "https://www.bing.com/search?q={}",
      "duckduckgo": "https://duckduckgo.com/?q={}",
      "twitter": "https://twitter.com/search?q={}",
      "wikipedia": "https://en.wikipedia.org/w/index.php?search={}"
    }
  }
}`
};
