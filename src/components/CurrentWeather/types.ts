export type WeatherCurrent = {
  cityName: string;
  temp: number;
  tempmin: number;
  tempmax: number;
  feelslike: number;
  uvindex?: number;
  visibility: number;
  windspeed: number;
  winddir: number;
  icon: string;
  hours: WeatherHour[];
};

export type WeatherDay = {
  datetime: string;
  tempmin: number;
  tempmax: number;
  icon: string;
};

export type WeatherHour = {
  datetime: string;
  temp: number;
  icon: string;
};
