import { createSelector } from "@reduxjs/toolkit";
import { Store } from "../interfaces";

const modalsReducerSelectors = (state: Store) => state.modalsReducer;

export const getModalType = createSelector(
  modalsReducerSelectors,
  (state) => state.modalType
);
