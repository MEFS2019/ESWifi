import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText
} from "@ionic/react";

import { FingerprintAIO } from "@ionic-native/fingerprint-aio";

const Tab2 = () => {
  const [authorized, setAuthorized] = useState(null);

  const startAuth = async () => {
    try {
      const result = await FingerprintAIO.show({
        clientId: "esWiFi-Pre",
        clientSecret: "secretosuperprivadoprovisional"
      });
      console.log(result);
      setAuthorized(true);
    } catch (error) {
      setAuthorized(false);
      console.error(error);
    }
  };

  useEffect(() => {
    setAuthorized(null);
    startAuth();
  }, []);

  const showContent = () => {
    switch (authorized) {
      case true:
        return (
          <IonText color="primary">
            <h1>Has entradito!</h1>
          </IonText>
        );
      case false:
        return (
          <IonText color="danger">
            <h2>No se pue. Amos, que no se pue.</h2>
          </IonText>
        );
      case null:
        return (
          <IonText color="secondary">
            <h1>Identifiquese nomas</h1>
          </IonText>
        );
      default:
        return (
          <IonText color="danger">
            <h1>No se qapasao</h1>
          </IonText>
        );
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Vista autenticada</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>{showContent()}</IonContent>
    </IonPage>
  );
};

export default Tab2;
