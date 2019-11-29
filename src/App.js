import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { flash, bug } from "ionicons/icons";

import Start from "pages/Start";
import SelectRouter from "pages/SelectRouter";
import CheckNetwork from "pages/CheckNetwork";
import WebViewDebugger from "pages/WebViewDebugger";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "theme/variables.css";

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/start" component={Start} exact={true} />
          <Route
            path="/start/selectRouter"
            component={SelectRouter}
            exact={true}
          />
          <Route path="/start/check" component={CheckNetwork} exact={true} />
          <Route path="/debug" component={WebViewDebugger} exact={true} />
          <Route
            path="/webViewDebugger"
            component={WebViewDebugger}
            exact={true}
          />
          <Route
            path="/"
            render={() => <Redirect to="/start" />}
            exact={true}
          />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="start" href="/start">
            <IonIcon icon={flash} />
            <IonLabel>Securizame esta</IonLabel>
          </IonTabButton>
          <IonTabButton tab="debug" href="/debug">
            <IonIcon icon={bug} />
            <IonLabel>Debuguiar WebView</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
