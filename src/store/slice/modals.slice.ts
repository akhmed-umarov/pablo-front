import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navbar: false,
};

const ModalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    closeEvery: (state) => {
      state.navbar = false;
    },
    toggleNavbar: (state) => {
      state.navbar = !state.navbar;
    },
  },
});

export default ModalsSlice.reducer;

export const { toggleNavbar , closeEvery } = ModalsSlice.actions;
