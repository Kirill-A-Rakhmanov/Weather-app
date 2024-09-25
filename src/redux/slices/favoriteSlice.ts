import { RootState } from "@/redux/store";
import { FavoriteWeather } from "@/shared/shared";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FavoriteState {
  list: FavoriteWeather[];
}

const initialState: FavoriteState = {
  list: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite(state, action: PayloadAction<FavoriteWeather>) {
      state.list.push(action.payload);
    },
    removeFromFavorite(state, action: PayloadAction<number>) {
      state.list = state.list.filter((obj) => obj.id !== action.payload);
    },
    // rename(state, action) {},
  },
});

export const {} = favoriteSlice.actions;

export const selectFavorite = (state: RootState) => state.favorite;

export default favoriteSlice.reducer;
