import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

interface WeatherState {
  value: string;
}

const initialState: WeatherState = {
  value: "",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
});

export const {} = weatherSlice.actions;

export const selectWeather = (state: RootState) => state.weather;

export default weatherSlice.reducer;
