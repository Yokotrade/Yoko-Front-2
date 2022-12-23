import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginUser as loginUserApi,
  registerUser as registerUserApi,
} from "api/$AUTH";
import { AuthUserDto } from "api/__mock__/auth";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData: AuthUserDto, { rejectWithValue }) => {
    try {
      return await loginUserApi(userData);
    } catch {
      rejectWithValue("Не верный логин или пароль");
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData: AuthUserDto, { rejectWithValue }) => {
    try {
      return await registerUserApi(userData);
    } catch {
      rejectWithValue("Не верный логин или пароль");
    }
  }
);
