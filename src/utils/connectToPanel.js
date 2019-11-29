import { executeScript } from "./executeScript";

export const connectToPanel = async (routerData, panelData) => {
  const { gatewayAddress: url, user, password } = panelData;
  const {
    scripts: { login: loginScript }
  } = routerData;
  try {
    const result = await executeScript({
      url,
      args: {
        user,
        password
      },
      code: routerData.loginScript
    });
    return result;
  } catch (error) {
    return error;
  }
};
