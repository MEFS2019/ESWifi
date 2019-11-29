import React, { useState } from "react";
import {
    IonHeader,
    IonToolbar,
    IonPage,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonAlert
} from "@ionic/react";

import BtnDashboard from "components/BtnDashboard";

const listFeatures = [
    { data: "Wifi Pass", state: false, route: "wifiPass", type: "password"},
    { data: "SSID", state: true, route: "ssid", type: "text"},
    { data: "Admin Pass", state: true, route: "adminPass", type: "password"},
    { data: "WPS", state: true, route: "wps"},
    { data: "Cypher", state: false, route: "cypher"},
    { data: "MACs Filter", state: true, route: "mac", type: "text"},
    { data: "Allow IPs", state: true, route: "ips", type: "text"},
    { data: "Signal Power", state: true, route: "signal", type: "range"}
]

let myInputs = [];

const Dashboard = props => {

    const [showAlert, setShowAlert] = useState(false);
    const [displayAlertHeader, setAlertHeader] = useState('Alert');
    const [alertMessage, setAlertMessage] = useState("");
    const [okButtonText, setOkButtonText] = useState("Save");

    const handleRoute = (event, name, type, route) => {
        event.preventDefault();
        setAlertHeader("Change " + name);
        myInputs = createInputs(type, route);
        setShowAlert(true);
    };

    function createInputs(type, route) {
        const newInputs = [];
        if (type) {
            setAlertMessage('You can change your data here:');
            if (type === "range") {
                newInputs.push({
                    type: type,
                    min: 0,
                    max: 100,
                    step: 10,
                    color: "primary",
                    snaps: true,
                    name: "changeData"
                });
            } else {
                newInputs.push({
                    type: type,
                    placeholder: route,
                    name: "changeData"
                });
            }
            setOkButtonText("Save");
        } else {
            setOkButtonText("OK");
            setAlertMessage('Your configuration has been modify');
        }
        return newInputs;
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonTitle>Dashboard</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent >
                <IonGrid>
                    {listFeatures.map(({ data, state, type, route }, i) => (
                    <IonRow key={i}>
                        <BtnDashboard onClick={event =>  handleRoute(event, data, type, route) } data={data} state={state}></BtnDashboard>
                    </IonRow>
                    ))}
                </IonGrid>
                <IonAlert
                    isOpen={showAlert}
                    onDidDismiss={() => setShowAlert(false)}
                    header={displayAlertHeader}
                    subHeader={''}
                    message={alertMessage}
                    buttons = {[
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: () => {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: okButtonText,
                            handler: data => {
                                console.log('Save clicked');
                                console.log(data.changeData);
                            }
                        }
                    ]}
                    inputs={myInputs}
                />
            </IonContent>
    </IonPage>
    );
};

export default Dashboard;