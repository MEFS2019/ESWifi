import React from "react";
import { IonButton, IonIcon, IonItem } from "@ionic/react";

import { checkbox } from "ionicons/icons";

const BtnDashboard = props => {
  const { data: name, state: color, onClick } = props;

  return (
    <IonButton
      onClick={onClick}
      style={{ width: "65%" }}
      shape="round"
      expand="block"
      size="large"
      name="test"
    >
      <IonItem
        lines="none"
        color="#3880ff"
        style={{ width: "100%", font: "inherit" }}
      >
        <IonIcon
          slot="start"
          color={color ? "success" : "danger"}
          icon={checkbox}
        />
        {name}
      </IonItem>
    </IonButton>
  );
};

export default BtnDashboard;
