import { InitialState as UserState } from "./User";
import { InitialState as ModalsState } from "./Modals";

export interface Store {
  userReducer: UserState;
  modalsReducer: ModalsState;
}
