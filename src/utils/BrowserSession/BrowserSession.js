import { InAppBrowser } from "@ionic-native/in-app-browser";
import { buildScript } from "./buildScript";

export class BrowserSession {
  browser = null;

  constructor({ url, hidden = true }) {
    this.browser = InAppBrowser.create(url, "_blank", `usewkwebview=yes`);
  }

  navigate({ url }) {
    return new Promise(resolve => {
      this.browser.open(url, "_self");
      const observable = this.browser.on("loadstop").subscribe(() => {
        resolve();
        observable.unsubscribe();
      });
    });
  }

  waitForUrl({ url = "", regExp = "", timeout = 10 * 1000 }) {
    let timer = null;
    return new Promise((resolve, reject) => {
      const observable = this.browser.on("loadstop").subscribe(event => {
        const { url: browserUrl } = event;
        console.log(url, regExp, browserUrl);
        if (
          (url && browserUrl === url) ||
          (regExp && new RegExp(regExp).test(browserUrl))
        ) {
          resolve();
          observable.unsubscribe();
        } else {
          if (!timer) {
            timer = setTimeout(() => {
              reject("Timeout exceeded");
              observable.unsubscribe();
            }, timeout);
          }
        }
      });
    });
  }

  executeScript({ code = "", args = {}, timeout = 10 * 1000 }) {
    let timer = null;
    console.log(1);
    return new Promise((resolve, reject) => {
      const script = buildScript({ code, args });
      console.log(2);
      const observable = this.browser.on("message").subscribe(event => {
        const {
          data: { action }
        } = event;
        alert(action);
      });
      this.browser.executeScript({ code: script });
      console.log(script);
      console.log(3);
    });
  }

  async runFlow({ flow, args = {} }) {
    for (let step of flow) {
      const { type, details } = step;
      if (this[type]) {
        try {
          console.log("estoy corriendo ", type);
          await this[type]({ ...details, args });
          console.log("terminé ", type);
        } catch (error) {
          console.log(error);
          throw new Error(error);
        }
      }
    }
    console.log("terminé nomas");
    this.browser.hide();
    return true;
  }
}
