import { API_KEY, weatherApi } from "../shared";

export const getWeatherToday = (cityName: string) => {
  const url: string = [cityName, "today"].join("/");

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
    "icon",
    "uvindex",
  ];

  const params = {
    key: API_KEY,
    unitGroup: "metric",
    include: include.join(","),
    elements: elements.join(","),
  };

  const data = weatherApi
    .get(url, { params })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return undefined;
    });
  return data;
};

export const getWeatherFuture = (cityName: string) => {
  const url: string = [cityName, "next10days"].join("/");

  const include: string[] = ["days", "hours"];
  const elements: string[] = ["temp", "datetime"];

  const params = {
    unitGroup: "metric",
    include: include.join(","),
    elements: elements.join(","),
  };

  const data = weatherApi
    .get(url, { params })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return undefined;
    });
  return data;
};

export const getWeatherSmall = (cityName: string) => {
  const url: string = [cityName, "today"].join("/");

  const include: string[] = ["current"];
  const elements: string[] = ["temp", "datetime"];

  const params = {
    unitGroup: "metric",
    include: include.join(","),
    elements: elements.join(","),
  };

  const data = weatherApi
    .get(url, { params })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return undefined;
    });
  return data;
};
