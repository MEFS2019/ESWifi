import React from "react";

import {
    IonHeader,
    IonToolbar,
    IonPage,
    IonTitle,
    IonContent
} from "@ionic/react";

import QRGenerator from "components/QRGenerator";

const QR = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonTitle>QR</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <QRGenerator ssid="openwrt" cypher="WPA/WPA2" pass="" />
            </IonContent>
        </IonPage>
    );
};

export default QR;