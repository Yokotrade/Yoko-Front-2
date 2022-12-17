import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./User";
import { Store } from "./interfaces";

export const reducer = combineReducers<Store>({
  userReducer,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
