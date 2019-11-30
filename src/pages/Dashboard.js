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
import routerData from "data/routersData";

import BtnDashboard from "components/BtnDashboard";

import { BrowserSession } from "utils/BrowserSession";
import { connectToPanel } from "utils/connectToPanel";

const listFeatures = [
  { data: "Wifi Pass", state: false, feature: "wifiPass", type: "password" },
  { data: "SSID", state: true, feature: "ssid", type: "text" },
  { data: "Admin Pass", state: true, feature: "adminPass", type: "password" },
  { data: "WPS", state: true, feature: "wps" },
  { data: "Cypher", state: false, feature: "cypher" },
  { data: "MACs Filter", state: true, feature: "mac", type: "text" },
  { data: "Allow IPs", state: true, feature: "ips", type: "text" },
  { data: "Signal Power", state: true, feature: "signal", type: "range" }
];

const Dashboard = props => {
  const { history } = props;
  const {
    location: { state: { router = {}, panelData = {} } = {} } = {}
  } = history;

  const actions = {
    adminPass: async newPassword => {
      let session = null;
      try {
        session = await connectToPanel(router, panelData);
      } catch (error) {
        console.log(error);
      }
      const {
        flows: { adminPass }
      } = router;
      if (!session) return;
      try {
        await session.runFlow({
          flow: adminPass,
          args: { password: newPassword }
        });
        alert("Success!");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const [showAlert, setShowAlert] = useState(false);
  const [inputs, setInputs] = useState([]);
  const [displayAlertHeader, setAlertHeader] = useState("Alert");
  const [alertMessage, setAlertMessage] = useState("");
  const [okButtonText, setOkButtonText] = useState("Save");
  const [feature, setFeature] = useState(null);

  const handleRoute = (event, name, type, feature) => {
    event.preventDefault();
    setAlertHeader("Change " + name);
    setInputs(createInputs(type, feature));
    setShowAlert(true);
    setFeature(feature);
  };

  const createInputs = (type, feature) => {
    const newInputs = [];
    if (type) {
      setAlertMessage("You can change your data here:");
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
          placeholder: feature,
          name: "changeData"
        });
      }
      setOkButtonText("Save");
    } else {
      setOkButtonText("OK");
      setAlertMessage("Your configuration has been modify");
    }
    return newInputs;
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {listFeatures.map(({ data, state, type, feature }, i) => (
            <IonRow key={i}>
              <BtnDashboard
                onClick={event => handleRoute(event, data, type, feature)}
                data={data}
                state={state}
              ></BtnDashboard>
            </IonRow>
          ))}
        </IonGrid>
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={displayAlertHeader}
          subHeader={""}
          message={alertMessage}
          buttons={[
            {
              text: "Cancel",
              role: "cancel",
              handler: () => {
                console.log("Cancel clicked");
              }
            },
            {
              text: okButtonText,
              handler: ({ changeData }) => {
                actions[feature](changeData);
              }
            }
          ]}
          inputs={inputs}
        />
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
