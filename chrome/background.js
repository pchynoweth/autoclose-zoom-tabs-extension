chrome.tabs.onUpdated.addListener(
  (tabId, change) => {
    if (/https:\/\/(.*\.)?zoom\.us\/j\//.test(change.url)) {
      setTimeout(() => {
        browser.tabs.remove(tabId);
      }, 10000);
    }
  }
);