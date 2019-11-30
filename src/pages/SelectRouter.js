import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonCol,
  IonRow
} from "@ionic/react";
import routersData from "data/routersData";

import RouterSelector from "components/forms/RouterSelector";

import "./SelectRouter.css";

const SelectRouter = props => {
  const { history } = props;

  const handleRouterSelection = router => {
    history.push("/start/check", { router });
  };

  return (
    <IonPage className="SelectRouter">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Select router type</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <h2>Give us a hint</h2>
              <p>
                Each router brand and model has a different firmware, so we need
                to know what is your router in order to know how to access the
                administration panel.
              </p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <RouterSelector
                data={routersData}
                onSelect={handleRouterSelection}
              ></RouterSelector>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <p>
                <small>
                  Don't see your router model? Sorry! You can contribute and add
                  support to it though -
                  <a href="https://github.com/MEFS2019/ESWifi">
                    check it out :)
                  </a>
                </small>
              </p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SelectRouter;
