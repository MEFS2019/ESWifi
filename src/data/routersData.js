export default [
  {
    id: "openwrt",
    displayName: "OpenWRT",
    routerList: [
      {
        id: "generic",
        displayName: "Generic OpenWRT router"
      }
    ]
  },
  {
    id: "orange-sp",
    displayName: "Orange España",
    routerList: [
      {
        id: "livebox2",
        displayName: "LiveBox 2",
        defaultAdminCredentials: {
          gatewayAddress: "http://192.168.1.1",
          user: "root",
          password: "root"
        },
        flows: {
          login: [
            {
              type: "waitForUrl",
              details: {
                regExp: "/cgi-bin/luci/"
              }
            },
            {
              type: "executeScript",
              details: {
                resolveOnNavigation: true,
                code: `
                document.querySelector("#maincontent > form > div.cbi-map > div.cbi-section > div > div:nth-child(1) > div > input").value = esWiFi.args.user;
                document.querySelector("#maincontent > form > div.cbi-map > div.cbi-section > div > div.cbi-value.cbi-value-last > div > input").value = esWiFi.args.password;
                document.forms[0].submit();
              `
              }
            }
          ]
        }
      }
    ]
  }
];
