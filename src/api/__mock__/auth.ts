import { User, MockUser } from "./user";

export interface AuthResponse {
  data: User;
}

export const AuthResponseSuccess: AuthResponse = {
  data: MockUser,
};

export type AuthUserDto = {
  Login: string;
  Password: string;
};
