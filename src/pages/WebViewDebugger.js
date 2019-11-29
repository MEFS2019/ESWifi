import React, { useState } from "react";
import {
  IonHeader,
  IonToolbar,
  IonPage,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton
} from "@ionic/react";

import { InAppBrowser } from "@ionic-native/in-app-browser";

let webView = null;

const WebViewDebugger = () => {
  const [url, setURL] = useState("");
  const [script, setScript] = useState("");

  const openWebView = () => {
    webView = InAppBrowser.create(url, "_blank");
    webView.on("loadstop").subscribe(() => {
      webView.executeScript({ code: script });
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>WebView juguetón</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel position="stacked">URL</IonLabel>
          <IonInput
            required
            name="url"
            onIonChange={ev => setURL(ev.detail.value)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">EsCriPt toOh ReEsShuLoOn</IonLabel>
          <IonTextarea
            required
            name="script"
            onIonChange={ev => setScript(ev.detail.value)}
          ></IonTextarea>
        </IonItem>
        <IonButton onClick={openWebView}>Dale fuegote</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default WebViewDebugger;
