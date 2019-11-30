import { BrowserSession } from "utils/BrowserSession";

export const connectToPanel = async (routerData, panelData) => {
  const { gatewayAddress: url, user, password } = panelData;
  const {
    flows: { login: loginFlow }
  } = routerData;

  const loginArgs = {
    user,
    password
  };

  const session = new BrowserSession({ url, hidden: false });
  try {
    await session.runFlow({ flow: loginFlow, args: loginArgs });
    return true;
  } catch (error) {
    alert(error);
    throw new Error(error);
  }
};
