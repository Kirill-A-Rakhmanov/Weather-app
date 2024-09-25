import { configureStore } from "@reduxjs/toolkit";
import { favoriteSlice, searchSlice } from "./slices/slices";

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    favorite: favoriteSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
