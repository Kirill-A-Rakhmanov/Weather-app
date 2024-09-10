import axios from "axios";

export const API_KEY = "3KRKJ9B8VZ5WGW7DZKGWHAGTU";
export const API_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

export const weatherApi = axios.create({
  baseURL: API_URL,
});
