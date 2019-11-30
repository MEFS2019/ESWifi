import React from "react";
import {
  IonSlides,
  IonSlide,
  IonContent,
  IonButton,
  IonIcon
} from "@ionic/react";

import "./Slides.css";

// Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400
};

const Slides = props => {
  const continueHandler = () => {
    const { history } = props;
    history.push("/start");
  };

  return (
    <IonContent fullscreen padding scroll-y="false">
      <IonSlides pager={false} options={slideOpts}>
        <IonSlide>
          <img src="./assets/img/slide-1.png" alt="" />
          <h2>
            Welcome to <b>esWiFi</b>
          </h2>
          <p>
            This <b>easy securization WiFi app</b> is a practical app to quickly
            improve your WiFi network security
          </p>
        </IonSlide>
        <IonSlide>
          <img src="./assets/img/slide-2.png" alt="" />
          <h2>What is esWiFi?</h2>
          <p>
            <b>esWiFi</b> is an open source app that enables everyone to
            securize their WiFi network with no technical knowledge
          </p>
        </IonSlide>
        <IonSlide>
          <img src="./assets/img/slide-4.png" alt="" />
          <h2>Ready to Play?</h2>
          <IonButton fill="clear" onClick={continueHandler}>
            Start
            <IonIcon slot="end" name="arrow-forward"></IonIcon>
          </IonButton>
        </IonSlide>
      </IonSlides>
    </IonContent>
  );
};

export default Slides;
