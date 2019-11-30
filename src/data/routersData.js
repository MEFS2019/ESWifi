export default [
  {
    id: "openwrt",
    displayName: "OpenWRT",
    routerList: [
      {
        id: "generic",
        displayName: "Generic OpenWRT router",
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
            },
            {
              type: "executeScript",
              details: {
                code: `
                var warningEl = document.querySelector('.alert-message.warning');
                if(warningEl) {
                  esWiFi.reject('Invalid password');
                } else {
                  esWiFi.resolve();
                }
              `
              }
            }
          ],
          adminPass: [
            {
              type: "executeScript",
              details: {
                resolveOnNavigation: true,
                code: `
                document.location.href = "/cgi-bin/luci/admin/system/admin";
                `
              }
            },
            {
              type: "executeScript",
              details: {
                resolveOnNavigation: true,
                code: `
                document.getElementById("cbid.system._pass.pw1").value = esWiFi.args.password;
                document.getElementById("cbid.system._pass.pw2").value = esWiFi.args.password;
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
