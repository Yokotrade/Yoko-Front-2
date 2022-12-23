import { User, MockUser } from "./user";

export interface AuthResponse {
  error: string;
  success: boolean;
  data: User;
}

export const AuthResponseSuccess: AuthResponse = {
  error: "",
  success: true,
  data: MockUser,
};

export type AuthUserDto = {
  email: string;
  password: string;
};
