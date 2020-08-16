browser.tabs.onUpdated.addListener(
  (tabId) => {
    setTimeout(() => {
      browser.tabs.remove(tabId);
    }, 10000);
  }
, {
  urls: [
    'https://zoom.us/j/*'
  ]
});