export interface WeatherShort {
  datetime: string;
  icon: string;
  temp: number;
  tempmax?: number;
  tempmin?: number;
  conditions: string;
}

export interface WeatherFull extends WeatherShort {
  feelslike: number;
  humidity: number;
  pressure: number;
  uvindex: number;
  visibility: number;
  winddir: number;
  windspeed: number;
}

export type Day<T> = T & { hours?: T[] };

export interface Data<T> {
  address: string;
  currentConditions: T;
  days?: Day<T>[];
  resolvedAddress: string;
}

export interface Response<T> {
  address: string;
  currentConditions: T;
  days?: Day<T>[];
  resolvedAddress: string;
  latitude: number;
  longtitude: number;
  queryCost: number;
  timezone: string;
  tzoffset: number;
}

export interface WeatherState<T> {
  data: Data<T> | null;
  loading: boolean;
}

export interface FavoriteWeather {
  id: number;
  name: string;
  resolvedAddress: string;
}
