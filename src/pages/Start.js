import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonButton,
  isPlatform,
  IonGrid,
  IonRow,
  IonCol
} from "@ionic/react";

import "./Start.css";

const Start = props => {
  const handleContinue = () => {
    const { history } = props;
    history.push("/start/selectRouter");
  };

  const handleOpenSettings = () => {
    console.log("settings to flamas");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Securize network</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {isPlatform("android") ? (
            <IonRow justify-content-center>
              <IonCol size="11">
                <h2>Check your network</h2>
                <p>
                  You're currently connected to Vodafone-EJEJEXD. Continue if
                  that is the network you want to securize.
                </p>
              </IonCol>
            </IonRow>
          ) : (
            <IonRow justify-content-center>
              <IonCol size="11">
                <h2>Connect to the desired network</h2>
                <p>
                  Make sure you are connected to the network you want to
                  securize.
                </p>
              </IonCol>
            </IonRow>
          )}
          <IonRow>
            <IonButton onClick={handleContinue} size="large">
              Continue
            </IonButton>
          </IonRow>
          <IonRow>
            <IonButton fill="clear" onClick={handleOpenSettings}>
              Open WiFi settings
            </IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Start;
