import { getWeatherColor, WeatherFull, WeatherState } from "@/shared/shared";
import {
  CurrentWeather,
  DaysWeather,
  FeelsLike,
  HoursWeather,
  Humidity,
  Pressure,
  UVIndex,
  Visibility,
  Wind,
} from "@/widgets/widgets";

import styles from "./Weather.module.scss";
import clsx from "clsx";
import { Spinner } from "../Spinner/Spinner";

export const Weather = ({ data, loading }: WeatherState<WeatherFull>) => {
  console.log(data);

  return loading ? (
    <Spinner />
  ) : (
    <div
      className={clsx(
        styles.wrapper,
        styles[getWeatherColor(data!.currentConditions.icon)!]
      )}
    >
      <div className={styles.top}>
        <h2 className={styles.title}>{data!.resolvedAddress}</h2>
        <div className={styles.fav}>Add</div>
      </div>
      <div className={styles.content}>
        <CurrentWeather data={data!} />
        <HoursWeather hours={data!.days![0].hours!} tzoffset={data!.tzoffset} />
        <DaysWeather days={data!.days!} />
        <Humidity
          humidity={data!.currentConditions.humidity}
          dew={data!.currentConditions.dew}
        />
        <UVIndex uvindex={data!.currentConditions.uvindex} />
        <FeelsLike
          feelslike={data!.currentConditions.feelslike}
          temp={data!.currentConditions.temp}
        />
        <Visibility visibility={data!.currentConditions.visibility} />
        <Wind
          winddir={data!.currentConditions.winddir}
          windspeed={data!.currentConditions.windspeed}
          maxwindspeed={data!.days![0].windspeed}
        />
        <Pressure pressure={data!.currentConditions.pressure} />
      </div>
    </div>
  );
};
