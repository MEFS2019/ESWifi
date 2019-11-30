import { BrowserSession } from "utils/BrowserSession";

export const connectToPanel = async (routerData, panelData) => {
  const { gatewayAddress: url, user, password } = panelData;
  const {
    flows: { login: loginFlow, wifiPassword }
  } = routerData;

  const loginArgs = {
    user,
    password
  };
  const wifiArgs = {
    password: "1234"
  };


  const session = new BrowserSession({ url, hidden: false });
  try {
    await session.runFlow({ flow: loginFlow, args: loginArgs });
    // await session.runFlow({ flow: wifiPassword, args: wifiArgs });
    return true;
  } catch (error) {
    alert(error);
    throw new Error(error);
  }
};
