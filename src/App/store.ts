import { searchSlice } from "@/components/components";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
