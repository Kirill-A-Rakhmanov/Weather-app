import { WeatherCurrent, WeatherHour } from "../../components/components";

export const mapWeatherCurrent = (data: any) => {
  const mapped: WeatherCurrent = {
    cityName: data.resolvedAddress,
    temp: Math.round(data.currentConditions.temp),
    tempmin: Math.round(data.days[0].tempmin),
    tempmax: Math.round(data.days[0].tempmax),
    feelslike: Math.round(data.days[0].feelslike),
    visibility: data.days[0].visibility,
    windspeed: data.days[0].windspeed,
    winddir: data.days[0].winddir,
    icon: data.days[0].icon,
    hours: data.days[0].hours.map((element: any) => mapWeatherHours(element)),
  };
  return mapped;
};

export const mapWeatherHours = (hourData: any) => {
  const mapped: WeatherHour = {
    datetime: hourData.datetime.split(":")[0],
    temp: Math.round(hourData.temp),
    icon: hourData.icon,
  };
  return mapped;
};
