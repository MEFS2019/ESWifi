import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonPage,
  IonTitle,
  IonContent
} from "@ionic/react";
import ChangePassword from "components/forms/ChangePassword";

const Tab3Page = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab Three</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ChangePassword></ChangePassword>
      </IonContent>
    </IonPage>
  );
};

export default Tab3Page;
