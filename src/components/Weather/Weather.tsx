import { getWeatherColor, WeatherFull, WeatherState } from "@/shared/shared";
import {
  CurrentWeather,
  DaysWeather,
  HoursWeather,
  Humidity,
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
      <h2 className={styles.title}>{data!.resolvedAddress}</h2>
      <div className={styles.content}>
        <CurrentWeather data={data!} />
        <HoursWeather hours={data!.days![0].hours!} tzoffset={data!.tzoffset} />
        <DaysWeather days={data!.days!} />
        <Humidity humidity={data!.currentConditions.humidity} />
      </div>
    </div>
  );
};
