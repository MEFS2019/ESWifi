import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonItem
} from "@ionic/react";

import NetworkSelector from "../components/NetworkSelector";

const networks = [
  {
    name: "Vodafone-EC34"
  },
  {
    name: "Movistar-topotamadre"
  }
];

const AddNetwork = () => {
  const handleNetworkSelection = networkName => {
    console.log(networkName);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Select network</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <p>Choose the network you want to securize</p>
        </IonItem>
        <NetworkSelector
          networks={networks}
          onSelect={handleNetworkSelection}
        ></NetworkSelector>
      </IonContent>
    </IonPage>
  );
};

export default AddNetwork;
