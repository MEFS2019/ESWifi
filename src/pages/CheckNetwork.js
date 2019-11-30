import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonItem,
  IonList,
  IonSpinner,
  IonIcon,
  IonAlert
} from "@ionic/react";
import { closeCircleOutline, checkmarkCircleOutline } from "ionicons/icons";

import { connectToPanel as connectToPanelUtil } from "utils/connectToPanel";

const baseDefaultAdminCredentials = {
  gatewayAddress: "http://192.168.0.1",
  user: "admin",
  password: "admin"
};

const CheckNetwork = props => {
  const { history } = props;
  const { location: { state: { router = {} } = {} } = {} } = history;

  const [steps, setSteps] = useState([]);

  const [displayPanelPasswordPrompt, togglePanelPasswordPrompt] = useState(
    false
  );
  const [
    panelPasswordPromptCallback,
    setPanelPasswordPromptCallback
  ] = useState(() => {});

  const [panelData, setPanelData] = useState(
    router.defaultAdminCredentials || baseDefaultAdminCredentials
  );

  const [retried, setRetried] = useState(false);

  const pushStep = step => {
    setSteps(currentSteps => [...currentSteps, step]);
  };

  const replaceStep = stepToReplace => {
    const { id: idToReplace } = stepToReplace;
    setSteps(currentSteps =>
      [...currentSteps].map(step =>
        step.id === idToReplace ? stepToReplace : step
      )
    );
  };

  const askPanelPassword = () => {
    setPanelPasswordPromptCallback(() => data => {
      if (data) {
        setRetried(true);
        setPanelData(data);
      }
      togglePanelPasswordPrompt(false);
    });
    togglePanelPasswordPrompt(true);
  };

  const connectToPanel = async () => {
    try {
      const initialStep = {
        id: "connectToPanel",
        label: `Connecting to administration panel`,
        status: "pending"
      };
      if (retried) {
        replaceStep(initialStep);
      } else {
        pushStep(initialStep);
      }
      await connectToPanelUtil(router, panelData);
      replaceStep({
        id: "connectToPanel",
        label: `Connected to administration panel`,
        status: "success"
      });
      goToDashboard();
    } catch (error) {
      replaceStep({
        id: "connectToPanel",
        label: `Connection failed`,
        status: "error"
      });
      await askPanelPassword();
    }
  };

  const goToDashboard = () => {
    history.push("/dashboard", { router, panelData });
  };

  const checkNetwork = async () => {
    await connectToPanel();
  };

  useEffect(() => {
    checkNetwork();
  }, [panelData]);

  const renderSteps = steps =>
    steps.map(step => {
      const { id, label, status } = step;

      const iconMap = {
        pending: () => <IonSpinner slot="start"></IonSpinner>,
        success: () => (
          <IonIcon icon={checkmarkCircleOutline} slot="start"></IonIcon>
        ),
        error: () => <IonIcon icon={closeCircleOutline} slot="start"></IonIcon>
      };

      const icon = iconMap[status];
      return (
        <IonItem key={id}>
          {icon()}
          <IonText>{label}</IonText>
        </IonItem>
      );
    });

  return (
    <IonPage className="CheckNetwork">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Checking your network</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList lines="none">{renderSteps(steps)}</IonList>
        <IonAlert
          backdropDismiss={false}
          translucent
          header="Oops"
          subHeader="We need some more information to access your network administration panel"
          message="Please, check if your Gateway IP address, user name and password are correct"
          isOpen={displayPanelPasswordPrompt}
          onDidDismiss={() => panelPasswordPromptCallback(null)}
          buttons={[
            {
              text: "I need help",
              cssClass: "secondary",
              handler: () => {
                alert(
                  "aqui habra unos docs to wapos sobre como encontrar esta informasión"
                );
                return false;
              }
            },
            {
              text: "Continue",
              handler: data => {
                panelPasswordPromptCallback(data);
              }
            }
          ]}
          inputs={[
            {
              name: "gatewayAddress",
              type: "text",
              placeholder: "Gateway address",
              value: panelData.gatewayAddress
            },
            {
              name: "user",
              type: "text",
              placeholder: "User",
              value: panelData.user
            },
            {
              name: "password",
              type: "password",
              placeholder: "Password",
              value: panelData.password
            }
          ]}
        ></IonAlert>
      </IonContent>
    </IonPage>
  );
};

export default CheckNetwork;
