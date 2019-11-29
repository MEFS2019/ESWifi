import React, { useState, useEffect } from "react";
import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";

const RouterSelector = props => {
  const { data: brandList, onSelect: onRouterSelect } = props;

  const [brand, setBrand] = useState({});
  const [routerList, setRouterList] = useState([]);

  const handleBrandSelection = ({ detail: { value: chosenBrand } }) => {
    setBrand(chosenBrand);
  };

  const handleRouterSelection = ({ detail: { value: chosenRouter } }) => {
    if (chosenRouter) onRouterSelect(chosenRouter);
  };

  useEffect(() => {
    const brandRouters = brand.routerList;
    setRouterList(brandRouters || []);
  }, [brand]);

  const renderSelect = (list, label, onSelect) => (
    <IonItem>
      <IonLabel>{label}</IonLabel>
      <IonSelect onIonChange={onSelect} cancelText="Close" okText="Select">
        {list.map(item => (
          <IonSelectOption key={item.id} value={item}>
            {item.displayName}
          </IonSelectOption>
        ))}
      </IonSelect>
    </IonItem>
  );

  return (
    <form>
      {renderSelect(brandList, "Brand/provider", handleBrandSelection)}
      {routerList.length > 0 &&
        renderSelect(routerList, "Model", handleRouterSelection)}
    </form>
  );
};

export default RouterSelector;
