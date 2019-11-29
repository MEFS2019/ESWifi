import { InAppBrowser } from "@ionic-native/in-app-browser";

export const executeScript = ({
  url,
  args,
  code,
  browserInstance = null,
  preserveInstance = false
}) =>
  new Promise((resolve, reject) => {
    const browser =
      browserInstance || InAppBrowser.create(url, "_blank", "hidden=yes");
    browser.on("loadstop").subscribe(() => {
      let script = code;
      if (args) {
        script = `var window.__ESWIFI__SCRIPT_ARGS = ${JSON.stringify(
          args
        )};${code}`;
      }
      browser
        .executeScript({ code: script })
        .then(status => {
          if (status !== "ok") {
            reject(status);
          } else {
            if (preserveInstance) {
              resolve(browser);
            } else {
              browser.close();
              resolve();
            }
          }
        })
        .catch(error => reject(error));
    });
  });
