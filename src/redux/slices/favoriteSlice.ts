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
    addToFavorite(state, action: PayloadAction<string>) {
      const newObj: FavoriteWeather = {
        id: Date.now(),
        resolvedAddress: action.payload,
        name: action.payload.split(",")[0],
      };
      state.list.push(newObj);
    },
    removeFromFavorite(state, action: PayloadAction<number>) {
      state.list = state.list.filter((obj) => obj.id !== action.payload);
    },
    removeAll(state) {
      state.list = [];
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;

export const selectFavorite = (state: RootState) => state.favorite;

export default favoriteSlice.reducer;
