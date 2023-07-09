import { configureStore } from "@reduxjs/toolkit";
import modals from "./slice/modals.slice";
import auth from "./slice/auth.slice";

const store = configureStore({
  reducer: { modals, auth },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch