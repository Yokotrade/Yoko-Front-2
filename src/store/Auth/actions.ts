import { createAsyncThunk } from "@reduxjs/toolkit";
import { AsyncThunkConfig } from "../interfaces";
import {
  loginUser as loginUserApi,
  registerUser as registerUserApi,
} from "api/$auth";
import { AuthUserDto } from "api/__mock__/auth";
import { AuthResponse } from "api/__mock__/auth";

export const loginUser = createAsyncThunk<
  AuthResponse["data"] | undefined,
  AuthUserDto,
  AsyncThunkConfig
>("auth/loginUser", async (userData, { rejectWithValue }) => {
  try {
    const response = await loginUserApi(userData);
    return response.data;
  } catch {
    return rejectWithValue("Не верный логин или пароль");
  }
});

export const registerUser = createAsyncThunk<
  AuthResponse["data"] | undefined,
  AuthUserDto,
  AsyncThunkConfig
>("auth/registerUser", async (userData, { rejectWithValue }) => {
  try {
    const response = await registerUserApi(userData);
    return response.data;
  } catch {
    return rejectWithValue("Такой пользователь уже существует");
  }
});
