export const buildScript = ({ args = {}, code = "" }) => `
(function() {
  var esWiFi = {
    args: ${JSON.stringify(args)},
    sendMessage: function(type, message) {
      var messageObject = {
        type: type,
        detail: typeof message === 'object' ? JSON.stringify(message) : message
      };
      try {
        window['webkit'].messageHandlers['cordova_iab'].postMessage(JSON.stringify(messageObject));
        alert(Object.keys(window.webkit.messageHandlers).join(', '));
        alert(typeof window.webkit.messageHandlers.cordova_iab.postMessage);
      } catch(error) {
        alert(error);
      }
    },
    resolve: function(response) {
      esWiFi.sendMessage('resolve', response);
    },
    reject: function(response) {
      esWiFi.sendMessage('reject', response);
    },
  }
  
  ${code}
})();
`;
