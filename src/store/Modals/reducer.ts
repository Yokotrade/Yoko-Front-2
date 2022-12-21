import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type ActionModalType = "auth";

export interface InitialState {
  modalType: ActionModalType | null;
}

const initialState: InitialState = {
  modalType: null,
};

const modals = createSlice({
  name: "modals",
  initialState,
  reducers: {
    activeModal(state, { payload }: PayloadAction<ActionModalType>) {
      state.modalType = payload;
    },
    deactiveModal(state) {
      state.modalType = null;
    },
  },
});

export const { activeModal, deactiveModal } = modals.actions;

export default modals.reducer;
