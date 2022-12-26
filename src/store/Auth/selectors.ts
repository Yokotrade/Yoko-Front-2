import { createSelector } from "@reduxjs/toolkit";
import { Store } from "../interfaces";

const userReducerSelectors = (state: Store) => state.authReducer;

export const userSelectors = createSelector(
  userReducerSelectors,
  (state) => state.user
);

export const isAuthUser = createSelector(
  userReducerSelectors,
  (state) => !!state.user?.ID
);

export const isLoadingSelector = createSelector(
  userReducerSelectors,
  (state) => state.loading
);

export const errorSelector = createSelector(
  userReducerSelectors,
  (state) => state.error
);
