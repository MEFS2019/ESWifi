import React, { useState } from "react";
import {
    IonHeader,
    IonToolbar,
    IonPage,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonModal,
    IonButton
} from "@ionic/react";

import BtnDashboard from "components/BtnDashboard";

const listFeatures = [
    { data: "Wifi Pass", state: false, route: "wifiPass"},
    { data: "SSID", state: true, route: "ssid"},
    { data: "Admin Pass", state: true, route: "adminPass"},
    { data: "Cypher", state: false, route: "cypher"},
    { data: "MACs Filter", state: true, route: "mac"},
    { data: "Allow IPs", state: true, route: "ips"},
    { data: "Signal Power", state: true, route: "signal"}
]

const Dashboard = props => {

    const [showModal, setShowModal] = useState(false);

    const handleRoute = (event, route) => {
        console.log(route);
        event.preventDefault();
        const { history } = props;
        //setShowModal(true);
        history.push("/dashboard/" + route);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonTitle>Dashboard</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent >
                <IonGrid>
                    {listFeatures.map(({ data, state, route }, i) => (
                    <IonRow key={i}>
                        <BtnDashboard onClick={event =>  handleRoute(event, route) } data={data} state={state}></BtnDashboard>
                    </IonRow>
                    ))}
                </IonGrid>
                <IonModal isOpen={showModal}>
                    <p>This is modal content</p>
                    <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
                </IonModal>
            </IonContent>
    </IonPage>
    );
};

export default Dashboard;