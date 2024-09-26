import { getWeatherColor, WeatherFull, WeatherState } from "@/shared/shared";
import CurrentWeather from "./widgets/CurrentWeather/CurrentWeather";

import styles from "./Weather.module.scss";
import Spinner from "../Spinner/Spinner";
import clsx from "clsx";

const Weather = ({ data, loading }: WeatherState<WeatherFull>) => {
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
        <CurrentWeather
          temp={data!.currentConditions.temp}
          icon={data!.currentConditions.icon}
          resolvedAddress={data!.resolvedAddress}
          conditions={data!.currentConditions.conditions}
          tempmin={data!.days![0].tempmin!}
          tempmax={data!.days![0].tempmax!}
          tzoffset={data!.tzoffset}
        />
      </div>
    </div>
  );
};

export default Weather;
