import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// A. Import our loader (QR)
import {
  applyPolyfills,
  defineCustomElements
} from "@deckdeckgo/qrcode/dist/loader";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// B. Load QR component
applyPolyfills().then(() => {
  defineCustomElements(window);
});
