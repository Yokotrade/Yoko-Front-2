import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUser as getUserApi } from "api/$USER";
import { User } from "api/__mock__/user";

export const getUser = createAsyncThunk(
  "users/fetchByIdStatus",
  async (_, { rejectWithValue }) => {
    try {
      const response: User = await getUserApi();
      return response;
    } catch (e) {
      rejectWithValue(e);
    }
  }
);
