import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./actions";
import { User } from "api/__mock__/user";

export interface InitialState {
  user?: User | null;
  loading: boolean;
  error?: string | null;
}

const initialState: InitialState = {
  user: null,
  loading: false,
  error: null,
};

const auth = createSlice({
  name: "user",
  initialState,
  reducers: {
    cleanError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.loading = false;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.loading = false;
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const { cleanError } = auth.actions;
export default auth.reducer;
