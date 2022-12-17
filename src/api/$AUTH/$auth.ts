import axios from "api/axios";
import { AuthResponse, AuthUserDto, AuthResponseSuccess } from "api/__mock__/auth";
import { withMock, withMockReturnValue } from "api/withMock";

export const authUser = ({ email, password }: AuthUserDto) => {
  if (withMock) return withMockReturnValue<AuthResponse>(AuthResponseSuccess);
  return axios.post<AuthResponse>(`auth/${email}/${password}`);
};

