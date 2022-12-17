import axios from "api/axios";
import { withMock, withMockReturnValue } from "api/withMock";
import { User, MockUser } from "api/__mock__/user";
import { getToken } from "helpers/withToken";

export const getUser = () => {
  if (withMock) return withMockReturnValue<User>(MockUser);
  const token = getToken();
  return axios.get<User>(`users/${token}`);
};
