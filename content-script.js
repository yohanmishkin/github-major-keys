(function() {
  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
   */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  /**
   * Listen for messages from the background script.
  */
  browser.runtime.onMessage.addListener((message) => {
    switch (message.command) {
      case "goto-conversation":
        document.querySelectorAll('.tabnav-tab')[0].click();
        break;

      case "goto-commits":
        document.querySelectorAll('.tabnav-tab')[1].click();
        break;

      case "goto-files":
        document.querySelectorAll('.tabnav-tab')[3].click();
        break;

      case "toggle-file-details":
        document.querySelectorAll('button.btn-octicon.js-details-target').forEach(button => {
          if (button) button.click();
        });
        break;
    }
  });
})();
