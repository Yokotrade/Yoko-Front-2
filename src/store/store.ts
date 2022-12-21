import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./User";
import modalsReducer from "./Modals";

import { Store } from "./interfaces";

export const reducer = combineReducers<Store>({
  userReducer,
  modalsReducer,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
