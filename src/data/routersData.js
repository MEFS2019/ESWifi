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
          password: "root",
          ssid: "randomwrt"
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
                console.log(document.getElementById("cbid.system._pass.pw1"));
                document.getElementById("cbid.system._pass.pw1").value = esWiFi.args.password;
                document.getElementById("cbid.system._pass.pw2").value = esWiFi.args.password;
                console.log(esWiFi.args.password);
                document.forms[0].submit();
              `
              }
            }
          ],
          randomSSID: [
            {
              type: "executeScript",
              details: {
                resolveOnNavigation: true,
                code: `
                document.location.href = "cgi-bin/luci/admin/network/wireless/radio0.network1"
                `
              }
            },
            {
              type: "executeScript",
              details: {
                resolveOnNavigation: true,
                code: `
                	a = document.querySelector("#cbid\\.wireless\\.default_radio0\\.ssid")
                	a.setAttribute("value",esWiFi.args.ssid)
                	document.querySelector("#maincontent > form > div.cbi-page-actions > input.cbi-button.cbi-button-apply").click()
              `
              }
            }
          ],
          changeEncryption: [
            {
              type: "executeScript",
              details: {
                resolveOnNavigation: true,
                code: `
                document.location.href = "cgi-bin/luci/admin/network/wireless/radio0.network1"
                `
              }
            },
            {
              type: "executeScript",
              details: {
                resolveOnNavigation: true,
                code: `
                document.querySelector("body > header > div > div > ul > li:nth-child(3) > ul > li:nth-child(2) > a").click();
                document.querySelector("#maincontent > ul > li > a").click();
                document.getElementById('tab.wireless.default_radio0.encryption').children[0].click();
                document.getElementById('cbid.wireless.default_radio0.encryption').selectedIndex = 4;
                document.querySelector('#maincontent > form > div.cbi-page-actions > input.cbi-button.cbi-button-apply').click()
              `
              }
            }
          ],
          listDevices: [
            {
              type: "executeScript",
              details: {
                resolveOnNavigation: true,
                code: `
                document.location.href = "cgi-bin/luci/admin/network/dhcp?tab.dhcp.cfg01411c=advanced"
                `
              }
            },
            {
              type: "executeScript",
              details: {
                resolveOnNavigation: true,
                code: `
                	document.querySelector("#lease_status_table")
                	document.querySelector("#cbid\\.dhcp\\.cfg01411c\\.dhcpleasemax").value
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
          ]
        }
      }
    ]
  }
];
