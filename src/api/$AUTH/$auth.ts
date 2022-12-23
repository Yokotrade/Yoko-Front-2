import axios from "api/axios";
import { withMock, withMockReturnValue } from "api/withMock";
import {
  AuthResponse,
  AuthUserDto,
  AuthResponseSuccess,
} from "api/__mock__/auth";

export const loginUser = ({ email, password }: AuthUserDto) => {
  if (withMock)
    return withMockReturnValue<AuthResponse>(AuthResponseSuccess, 3000);
  return axios.post<AuthResponse, null>(`auth/${email}/${password}`, null);
};

export const registerUser = ({ email, password }: AuthUserDto) => {
  if (withMock)
    return withMockReturnValue<AuthResponse>(AuthResponseSuccess, 3000);
  return axios.post<AuthResponse, null>(`register/${email}/${password}`, null);
};
