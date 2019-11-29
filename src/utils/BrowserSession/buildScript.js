export const buildScript = ({ args = {}, code = "" }) => `


function postMessage(message){
  if(!webkit.messageHandlers.cordova_iab) throw "Cordova IAB postMessage API not found!";
  webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify(message));
}


postMessage({
  action: "logout"
});

`;
