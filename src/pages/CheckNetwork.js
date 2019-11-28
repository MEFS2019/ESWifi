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
  IonIcon
} from "@ionic/react";
import { closeCircleOutline, checkmarkCircleOutline } from "ionicons/icons";

import { connectToNetwork as connectToNetworkUtil } from "utils/connectToNetwork";

import "./CheckNetwork.css";

const renderSteps = steps =>
  steps.map(step => {
    const { label, status } = step;

    const iconMap = {
      pending: () => <IonSpinner slot="start"></IonSpinner>,
      success: () => (
        <IonIcon icon={checkmarkCircleOutline} slot="start"></IonIcon>
      ),
      error: () => <IonIcon icon={closeCircleOutline} slot="start"></IonIcon>
    };

    const icon = iconMap[status];
    return (
      <IonItem>
        {icon()}
        <IonText>{label}</IonText>
      </IonItem>
    );
  });

const CheckNetwork = props => {
  const {
    match: {
      params: { network }
    }
  } = props;

  const [steps, setSteps] = useState([]);

  const [displayPanelPasswordPrompt, togglePanelPasswordPrompt] = useState(
    false
  );
  const [
    panelPasswordPromptCallback,
    setPanelPasswordPromptCallback
  ] = useState(() => {});
  const [panelPassword, setPanelPassword] = useState("admin");

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

  const askPanelPassword = () =>
    new Promise(resolve => {
      togglePanelPasswordPrompt(true);
    });

  const connectToNetwork = async () => {
    try {
      pushStep({
        id: "connectToNetwork",
        label: `Connecting to ${network}`,
        status: "pending"
      });
      await connectToNetworkUtil(network);
      replaceStep({
        id: "connectToNetwork",
        label: `Connected to ${network}`,
        status: "success"
      });
    } catch (error) {
      replaceStep({
        id: "connectToNetwork",
        label: `Connection to ${network} failed`,
        status: "error"
      });
    }
  };

  const connectToPanel = async () => {
    try {
      pushStep({
        id: "connectToPanel",
        label: `Connecting to administration panel`,
        status: "pending"
      });
      await connectToNetworkUtil(network);
      replaceStep({
        id: "connectToPanel",
        label: `Connected to administration panel`,
        status: "success"
      });
    } catch (error) {
      replaceStep({
        id: "connectToPanel",
        label: `Connection to administration panel failed`,
        status: "error"
      });
      await askPanelPassword();
      connectToPanel();
    }
  };

  const checkNetwork = async () => {
    await connectToNetwork();
    await connectToPanel();
  };

  useEffect(() => {
    checkNetwork();
  }, []);

  return (
    <IonPage className="CheckNetwork">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Checking your network</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList lines="none">{renderSteps(steps)}</IonList>
      </IonContent>
    </IonPage>
  );
};

export default CheckNetwork;
