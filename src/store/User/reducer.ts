import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "./actions";
import { User } from "api/__mock__/user";

export interface InitialState {
  user?: User | null;
}

const initialState: InitialState = {
  user: null,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default user.reducer;
