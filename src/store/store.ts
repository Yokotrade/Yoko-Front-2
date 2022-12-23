import { configureStore, combineReducers } from "@reduxjs/toolkit";
import modalsReducer from "./Modals";
import authReducer from "./Auth";

import { Store } from "./interfaces";

export const reducer = combineReducers<Store>({
  modalsReducer,
  authReducer,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
