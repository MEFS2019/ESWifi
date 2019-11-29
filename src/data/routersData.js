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
          gatewayAddress: "192.168.1.1",
          user: "admin",
          password: "orange"
        },
        scripts: {
          login: `
            alert(__ESWIFI__SCRIPT_ARGS);
            return 'ok';
          `
        }
      }
    ]
  }
];
