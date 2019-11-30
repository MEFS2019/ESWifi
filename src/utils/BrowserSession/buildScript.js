
import { isPlatform } from "@ionic/react";

export const MESSAGE_URL = isPlatform("ios") ? "about:blank//message/" : "eswifi://message/";

/*
  This file basically injects arguments and two convenient functions to enable
  communication between our main webview and the one that runs the scripts.

  You may see the "sendMessage" function and think "wtf is this? are u crazy lolxd"

  Ok ok ok let me explain... there is a much better solution to pass up messages
  from this view to the main one using "postMessage", but right now is broken
  on iOS... so we came around with this (horrible but) amazing tactical solution™
  We basically load a non-existing specific URL to send up the message. The main
  view will then get it by listening the "loadstop" event.

  Yes, you can call us geniuses. Monsters may also be accurate too.
*/

export const buildScript = ({ args = {}, code = "" }) => `
(function() {
  var esWiFi = {
    args: ${JSON.stringify(args)},
    sendMessage: function(type, message) {
      message = typeof message === 'object' ? JSON.stringify(message) : message;
      document.location.href = '${MESSAGE_URL}' + type + '/' + encodeURIComponent(message);
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
