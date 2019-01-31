browser.commands.onCommand.addListener(function(command) {
  browser.tabs.query({
    currentWindow: true,
    active: true
  }).then(function([currentTab]) {
    let currentUrl = currentTab.url;

    if (/https:\/\/github.com\/.*\/.*\/pull\/\d*/.test(currentUrl)) {

      let baseUrl = currentUrl.split('/').filter((fragment, index) => {
        if (index < 7) {
          return true;
        }
      }).join('/');

      switch (command) {
        case "goto-conversation":
          browser.tabs.update(currentTab.id, { url: `${baseUrl}` });
          break;

        case "goto-commits":
          browser.tabs.update(currentTab.id, { url: `${baseUrl}/commits` });
          break;

        case "goto-files":
          browser.tabs.update(currentTab.id, { url: `${baseUrl}/files` });
          break;

      }
    }
  }).catch(ex => {
    debugger;
  });
});