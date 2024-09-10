import { configureStore } from "@reduxjs/toolkit";
import { searchSlice } from "../components/components";

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
