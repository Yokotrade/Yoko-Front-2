import { TOKEN_NAME } from "../token.constants";

export const setToken = (token: string) => {
  const myStorage = window.localStorage;
  myStorage.setItem(TOKEN_NAME, token);
};
