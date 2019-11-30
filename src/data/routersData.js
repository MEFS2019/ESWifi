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

            }
          ],
          wifiPassword: [
            {
              type: "executeScript",
              details: {
                resolveOnNavigation: true,
                code: `
                document.location.href = "/cgi-bin/luci/admin/system/admin"
                `
              }
            },
            {
              type: "executeScript",
              details: {
                resolveOnNavigation: true,
                code: `
                document.getElementById("cbid.system._pass.pw1").value = esWiFi.args.password
                document.getElementById("cbid.system._pass.pw2").value = esWiFi.args.password
                document.forms[0].submit()
              `
              }
            }
          ]
        }
      }
    ]
  },
  {
    id: "orange",
    displayName: "LiveBox2-OrangeES",
    routerList: [
      {
        id: "orange",
        displayName: "LiveBox2 Orange",
        defaultAdminCredentials: {
          gatewayAddress: "http://192.168.1.1",
          user: "admin",
          password: "admin"
        },
        flows: {
          login: [
            {
              type: "executeScript",
              details: {
                resolveOnNavigation: true,
                code: `
                document.location.href = "/index.htm"
                `
              }
            },
            {
              type: "executeScript",
              details: {
                resolveOnNavigation: false,
                code: `
                var mainFrame = document.getElementById('mainFrame');
                mainFrame.addEventListener('load', function() {
                	mainFrame.contentWindow.document.querySelector("#mainContent > table > tbody > tr > td:nth-child(2) > ul > li:nth-child(2) > div.readonly > input[type=password]").value = esWiFi.args.password;
                	document.getElementById('mainFrame').contentWindow.document.querySelector("#bt_save").click();
                  esWiFi.resolve();
                });
              `
              }
            }
          ],
          wps: [
            {
              type: "executeScript",
              details: {
                resolveOnNavigation: true,
                code: `
                document.location.href = "/index.htm"
                `
              }
            },
            {
              type: "executeScript",
              details: {
                resolveOnNavigation: false,
                code: `
                document.getElementById('topFrame').contentWindow.document.querySelector("#hmenu-config").click()
                document.getElementById("mainFrame").addEventListener('load', function() {
                  if(document.getElementById("mainFrame").contentWindow.document.querySelector("#wifi_pri_2g_wps_switch").value == "desactivar"){
                      document.getElementById("mainFrame").contentWindow.document.querySelector("#wifi_pri_2g_wps_switch").click()
                	document.getElementById('mainFrame').contentWindow.document.querySelector("#bt_save").click();
                  esWiFi.resolve();
                });
              `
              }
            }
          ]
        }
      }
    ]
  }
];
