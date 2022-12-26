import { User, MockUser } from "./user";

export interface AuthResponse extends User {}

export const AuthResponseSuccess: AuthResponse = MockUser;

export type AuthUserDto = {
  Login: string;
  Password: string;
};
