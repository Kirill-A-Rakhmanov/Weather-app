import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectSearch, WeatherCurrent } from "../components";
import {
  Container,
  getWeatherToday,
  mapWeatherCurrent,
} from "../../shared/shared";

import styles from "./CurrentWeather.module.scss";

const CurrentWeather = () => {
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
        <div>{weatherData ? weatherData.cityName : "no data"}</div>
      </Container>
    </section>
  );
};

export default CurrentWeather;
