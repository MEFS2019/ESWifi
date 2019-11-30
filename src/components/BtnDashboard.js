import React from "react";
import {
    IonButton,
    IonCol
} from "@ionic/react";

import {
    checkbox
} from "ionicons/icons";

import  "./Button.css";

const BtnDashboard = props => {

    const { data: name, state: color, onClick } = props;

    return (
        < IonButton onClick={onClick} style={{width: '70%'}} shape="round" expand="block" size="large" name="test" >
                <IonCol size="3">
                <div style={{marginLeft: 'inherit'}} class={ color ? "led-green" : "led-red" }></div>
                </IonCol>
                <IonCol class="ion-text-left" size="9">
                {name}
                </IonCol>
        </IonButton>
    );

};

export default BtnDashboard;