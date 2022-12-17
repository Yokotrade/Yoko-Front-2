import { TOKEN_NAME } from "../token.constants";

export const getToken = () => {
  const myStorage = window.localStorage;
  const token = myStorage.getItem(TOKEN_NAME);
  return token;
};
