import React from "react";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton
} from "@ionic/react";
import { book, build, colorFill, grid } from "ionicons/icons";

import { InAppBrowser } from "@ionic-native/in-app-browser";

import "./Tab1.css";

let webViewRef = null;
const openWebView = () => {
  if (webViewRef) {
    webViewRef.close();
    webViewRef = null;
  }

  webViewRef = InAppBrowser.create(
    "https://www.google.es/",
    "_blank",
    "hidden=yes"
  );
};

const showWebView = () => {
  webViewRef && webViewRef.show();
};

const Tab1 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab One</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={openWebView}>Abrir un webview to flama</IonButton>
        <IonButton onClick={showWebView}>Mostrar el webview oculto</IonButton>

        <IonList lines="none">
          <IonListHeader>
            <IonLabel>Resources</IonLabel>
          </IonListHeader>
          <IonItem href="https://ionicframework.com/docs/" target="_blank">
            <IonIcon slot="start" color="medium" icon={book} />
            <IonLabel>Ionic Documentation</IonLabel>
          </IonItem>
          <IonItem
            href="https://ionicframework.com/docs/building/scaffolding"
            target="_blank"
          >
            <IonIcon slot="start" color="medium" icon={build} />
            <IonLabel>Scaffold Out Your App</IonLabel>
          </IonItem>
          <IonItem
            href="https://ionicframework.com/docs/layout/structure"
            target="_blank"
          >
            <IonIcon slot="start" color="medium" icon={grid} />
            <IonLabel>Change Your App Layout</IonLabel>
          </IonItem>
          <IonItem
            href="https://ionicframework.com/docs/theming/basics"
            target="_blank"
          >
            <IonIcon slot="start" color="medium" icon={colorFill} />
            <IonLabel>Theme Your App</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
