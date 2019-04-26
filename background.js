browser.commands.onCommand.addListener(function(command) {
  browser.tabs.query({
    currentWindow: true,
    active: true
  }).then(function([currentTab]) {
    let currentUrl = currentTab.url;

    if (/https:\/\/github.com\/.*\/.*\/pull\/\d*/.test(currentUrl)) {
      browser.tabs.executeScript({ file: 'content-script.js' });
      browser.tabs.sendMessage(currentTab.id, { command });
    }
  }).catch(ex => {
    debugger;
  });
});