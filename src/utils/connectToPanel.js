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

  const session = new BrowserSession({ url });
  try {
    await session.runFlow({ flow: loginFlow, args: loginArgs });
    await session.navigate({ url });
    return session;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
