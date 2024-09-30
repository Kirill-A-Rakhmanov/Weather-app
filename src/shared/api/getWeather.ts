import { Response, WeatherFull, WeatherShort } from "../types/types";
import { API_KEY, weatherApi } from "./weatherApi";

export const getWeather = <T>(
  cityName: string,
  periodOfTime: string,
  include: string[] = [],
  elements: string[] = []
) => {
  const url: string = [cityName, periodOfTime].join("/");
  const params = {
    key: API_KEY,
    unitGroup: "metric",
    iconSet: "icons2",
    include: include.join(","),
    elements: elements.join(","),
  };

  const data = weatherApi
    .get<T>(url, { params })
    .then((response) => response.data);

  return data;
};

export const getWeatherFull = (cityName: string) => {
  const periodOfTime: string = "next9days";
  const include: string[] = ["current", "hours"];
  const elements: string[] = [
    "temp",
    "datetime",
    "tempmax",
    "tempmin",
    "pressure",
    "visibility",
    "windspeed",
    "winddir",
    "feelslike",
    "humidity",
    "dew",
    "icon",
    "uvindex",
    "conditions",
  ];

  const data = getWeather<Response<WeatherFull>>(
    cityName,
    periodOfTime,
    include,
    elements
  ).then((res) => res);
  return data;
};

export const getWeatherShort = (cityName: string) => {
  const periodOfTime: string = "today";
  const include: string[] = ["current"];
  const elements: string[] = ["temp", "datetime", "icon", "conditions"];

  const data = getWeather<Response<WeatherShort>>(
    cityName,
    periodOfTime,
    include,
    elements
  ).then((res) => res);
  return data;
};
