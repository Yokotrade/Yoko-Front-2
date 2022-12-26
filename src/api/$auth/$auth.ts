import axios from "api/axios";
import { withMock, withMockReturnValue } from "api/withMock";
import {
  AuthResponse,
  AuthUserDto,
  AuthResponseSuccess,
} from "api/__mock__/auth";

export const loginUser = (body: AuthUserDto) => {
  if (withMock)
    return withMockReturnValue<AuthResponse>(AuthResponseSuccess, 3000);
  return axios.post<AuthResponse, AuthUserDto>("frontauth", body);
};

export const registerUser = (body: AuthUserDto) => {
  if (withMock)
    return withMockReturnValue<AuthResponse>(AuthResponseSuccess, 3000);
  return axios.post<AuthResponse, AuthUserDto>("register", body);
};
