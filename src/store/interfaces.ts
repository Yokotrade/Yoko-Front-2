import { InitialState as ModalsState } from "./Modals";
import { InitialState as AuthState } from "./Auth";

import { AppDispatch } from "./store";
export interface Store {
  modalsReducer: ModalsState;
  authReducer: AuthState;
}

export interface AsyncThunkConfig {
  dispatch: AppDispatch;
  state: Store;
  rejectValue: string | null;
}
