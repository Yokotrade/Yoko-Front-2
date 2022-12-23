import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./actions";
import { User } from "api/__mock__/user";

export interface InitialState {
  user?: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  user: null,
  loading: false,
  error: null,
};

const auth = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.user = payload?.data;
      state.loading = false;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.user = payload?.data;
      state.loading = false;
    });
  },
});

export default auth.reducer;
