import { BrowserSession } from "utils/BrowserSession";

export const connectToPanel = async (routerData, panelData, hidden = true) => {
  const { gatewayAddress: url, user, password } = panelData;
  const {
    flows: { login: loginFlow }
  } = routerData;

  const loginArgs = {
    user,
    password
  };

  const session = new BrowserSession({ url, hidden });
  try {
    await session.runFlow({ flow: loginFlow, args: loginArgs });
    await session.navigate({ url });
    return session;
  } catch (error) {
    alert(error);
    throw new Error(error);
  }
};
