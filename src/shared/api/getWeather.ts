import { Day, WeatherShort } from "../shared";
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
