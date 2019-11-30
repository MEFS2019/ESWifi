import React from "react";

const QRGenerator = props => {
  const { ssid, cypher, pass } = props;

  return (
    <div class="ion-text-center">
      <deckgo-qrcode
        style={{ "--deckgo-qrcode-size": "300px" }}
        content={`WIFI:S:${ssid};T:${cypher};P:${pass};;`}
      ></deckgo-qrcode>
    </div>
  );
};

export default QRGenerator;
