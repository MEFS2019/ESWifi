import React from "react";
import { IonItem, IonLabel, IonInput, IonButton } from "@ionic/react";

import { getFormValues } from "utils/getFormValues";

const ChangePassword = () => {
  const handleFormSubmit = event => {
    event.preventDefault();
    const values = getFormValues(event.target);
    console.log(values);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <IonItem>
        <IonLabel position="stacked">Old password</IonLabel>
        <IonInput required name="oldPassword"></IonInput>
      </IonItem>
      <IonButton type="submit">Cambiar</IonButton>
    </form>
  );
};

export default ChangePassword;
