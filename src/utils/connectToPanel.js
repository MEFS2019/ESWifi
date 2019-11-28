export const connectToPanel = data =>
  new Promise((resolve, reject) => {
    if (data.password === "patata") {
      setTimeout(resolve, 1000);
    } else {
      setTimeout(reject, 1000);
    }
  });
