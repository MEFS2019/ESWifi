import React from "react";
import {
  IonList,
  IonListHeader,
  IonLabel,
  IonItem,
  IonIcon
} from "@ionic/react";

import { addCircleOutline } from "ionicons/icons";

const NetworkSelector = props => {
  const { networks, onSelect } = props;

  const chooseNetwork = (event, networkName) => {
    event.preventDefault();
    onSelect(networkName);
  };

  return (
    <IonList lines="none">
      <IonListHeader>
        <IonLabel>Networks</IonLabel>
      </IonListHeader>
      {networks.map(({ name }) => (
        <IonItem href="" onClick={event => chooseNetwork(event, name)}>
          <IonLabel>{name}</IonLabel>
        </IonItem>
      ))}
      <IonItem href="">
        <IonIcon slot="start" color="medium" icon={addCircleOutline} />
        <IonLabel>Add new network</IonLabel>
      </IonItem>
    </IonList>
  );
};

export default NetworkSelector;
