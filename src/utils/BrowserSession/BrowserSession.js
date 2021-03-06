import { InAppBrowser } from "@ionic-native/in-app-browser";
import { buildScript, MESSAGE_URL } from "./buildScript";

const parseMessageURI = url => {
  const trimmedUrl = url.replace(MESSAGE_URL, "");
  const [type, rawDetail] = trimmedUrl.split("/");
  const detail = decodeURIComponent(rawDetail);
  try {
    const finalDetail = JSON.parse(detail);
    return { type, detail: finalDetail };
  } catch (e) {
    return { type, detail };
  }
};

export class BrowserSession {
  browser = null;
  hidden = true;

  constructor(args) {
    this.navigate(args);
  }

  navigate({ url, hidden = true }) {
    this.hidden = hidden;
    this.browser = InAppBrowser.create(
      url,
      "_blank",
      `hidden=${
        this.hidden ? "yes" : "no"
      },clearcache=yes,clearsessioncache=yes`
    );
    return new Promise(resolve => {
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

  executeScript({
    code = "",
    resolveOnNavigation = false,
    args = {},
    timeout = 10 * 1000
  }) {
    let timer = null;
    let oldUrl = null;
    return new Promise((resolve, reject) => {
      // see buildScript.js for more context hehe
      const script = buildScript({ code, args });
      const setTimer = () => {
        if (!timer) {
          timer = setTimeout(() => {
            reject("Timeout exceeded");
            observable.unsubscribe();
          }, timeout);
        }
      };
      // alert('llegamoss')
      const observable = this.browser.on("loadstop").subscribe(event => {
        const { url } = event;
        if (resolveOnNavigation) {
          resolve();
          observable.unsubscribe();
        } else {
          console.log(url, MESSAGE_URL);
          if (url.includes(MESSAGE_URL)) {
            const { type, detail } = parseMessageURI(url);
            if (type === "resolve") {
              resolve(detail);
              observable.unsubscribe();
            } else if (type === "reject") {
              reject(detail);
              observable.unsubscribe();
            }
          } else {
            setTimer();
          }
        }
        this.browser.executeScript({ code: script });
      });
    });
  }

  async runFlow({ flow, args = {} }) {
    for (let step of flow) {
      const { type, details } = step;
      if (this[type]) {
        try {
          await this[type]({ ...details, args });
        } catch (error) {
          debugger;
          throw new Error(error);
        }
      }
    }
    // this.browser.hide();
    return true;
  }
}
