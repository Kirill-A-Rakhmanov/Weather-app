import { configureStore } from "@reduxjs/toolkit";
import { searchSlice, weatherSlice } from "./slices/slices";

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    weather: weatherSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
