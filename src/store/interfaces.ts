import { InitialState as UserState } from "./User";

export interface Store {
  userReducer: UserState;
}
