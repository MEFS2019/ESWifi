import React from 'react';
import {
    IonSlides,
    IonSlide,
    IonContent,
    IonButton,
    IonIcon
} from '@ionic/react';

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
                    < img src = "./assets/img/slide-1.png" />
                    <h2>Welcome to the <b>ESWifi</b></h2>
                    <p>The <b>easy securization wifi app</b> is a practical app to easy securitize your wifi</p>
                </IonSlide>
                <IonSlide>
                    <img src="./assets/img/slide-2.png" />
                    <h2>What is ESWifi?</h2>
                    <p> <b> ESWifi </b> is an open source apk that enables everyone to securitize their wifi with easy steps.</p >
                </IonSlide>
                <IonSlide>
                    <img src="./assets/img/slide-4.png" />
                    <h2>Ready to Play?</h2>
                    <IonButton fill="clear" onClick={continueHandler}>
                        Continue 
                        <IonIcon slot="end" name="arrow-forward"></IonIcon>
                    </IonButton>
                </IonSlide>
            </IonSlides>
        </IonContent>
    );
};

export default Slides;