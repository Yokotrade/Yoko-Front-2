import { createAsyncThunk } from "@reduxjs/toolkit";
import { AsyncThunkConfig } from "../interfaces";
import {
  loginUser as loginUserApi,
  registerUser as registerUserApi,
} from "api/$auth";
import { AuthUserDto } from "api/__mock__/auth";
import { AuthResponse } from "api/__mock__/auth";

export const loginUser = createAsyncThunk<
  AuthResponse | undefined,
  AuthUserDto,
  AsyncThunkConfig
>("auth/loginUser", async (userData, { rejectWithValue }) => {
  try {
    return await loginUserApi(userData);
  } catch {
    return rejectWithValue("Не верный логин или пароль");
  }
});

export const registerUser = createAsyncThunk<
  AuthResponse | undefined,
  AuthUserDto,
  AsyncThunkConfig
>("auth/registerUser", async (userData, { rejectWithValue }) => {
  try {
    return await registerUserApi(userData);
  } catch {
    return rejectWithValue("Такой пользователь уже существует");
  }
});
