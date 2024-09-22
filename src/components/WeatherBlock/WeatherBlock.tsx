import React from "react";

import styles from "./WeatherBlock.module.scss";
import { useAppSelector } from "@/app/hooks";
import { getWeatherToday, mapWeatherCurrent, Container } from "@/shared/shared";
import { selectSearch } from "../components";
import { WeatherCurrent } from "./types";
import WeatherToday from "../WeatherToday/WeatherToday";

export const WeatherBlock = () => {
  const { value } = useAppSelector(selectSearch);
  const [weatherData, setWeatherInfo] = React.useState<WeatherCurrent>();

  React.useEffect(() => {
    const getWeather = async (cityName: string) => {
      const data = await getWeatherToday(cityName);
      if (!data) {
        setWeatherInfo(undefined);
        return;
      }

      setWeatherInfo(mapWeatherCurrent(data));
    };

    if (value) {
      getWeather(value);
    }
  }, [value]);

  console.log(weatherData);

  return (
    <section className={styles.weather}>
      <Container>
        <div>
          {weatherData ? <WeatherToday data={weatherData} /> : "no data"}
        </div>
      </Container>
    </section>
  );
};
