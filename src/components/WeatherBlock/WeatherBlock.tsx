import React from "react";

import styles from "./WeatherBlock.module.scss";
import {
  Container,
  Data,
  getWeather,
  mapResponseData,
  Response,
  WeatherFull,
} from "@/shared/shared";
import { selectSearch, useAppSelector } from "@/redux/redux";

export const WeatherBlock = () => {
  const { value } = useAppSelector(selectSearch);
  const [weatherData, setWeatherInfo] = React.useState<Data<WeatherFull>>();

  React.useEffect(() => {
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
      "conditions",
    ];

    if (value) {
      getWeather<Response<WeatherFull>>(
        value,
        "next9days",
        include,
        elements
      ).then((data) => setWeatherInfo(mapResponseData(data)));
    }
  }, [value]);

  console.log(weatherData);

  return (
    <section className={styles.weather}>
      <Container>
        {/* <div>{weatherData ? weatherData.cityName : "no data"}</div> */}
      </Container>
    </section>
  );
};
