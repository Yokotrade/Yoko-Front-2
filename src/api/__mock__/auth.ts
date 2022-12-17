type ResultResponse = {
  error: string;
  success: boolean;
};

export interface AuthResponse {
  id: string;
  token: string;
  result: ResultResponse;
}

export const AuthResponseSuccess: AuthResponse = {
  id: "25",
  token: "637faa0a0dcd45.65589015",
  result: {
    error: "",
    success: true,
  },
};

export const AuthResponseError: AuthResponse = {
  id: "25",
  token: "637faa0a0dcd45.65589015",
  result: {
    error: "Не верный логин или пароль",
    success: false,
  },
};

export const RegisterMockIsCompleted = {
  success: true,
};

export type AuthUserDto = {
    email: string;
    password: string;
}