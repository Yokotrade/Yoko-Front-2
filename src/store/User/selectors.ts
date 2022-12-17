import { createSelector } from "@reduxjs/toolkit";
import { Store } from "../interfaces";

const userReducerSelectors = (state: Store) => state.userReducer;

export const userSelectors = createSelector(
  userReducerSelectors,
  (state) => state.user
);
