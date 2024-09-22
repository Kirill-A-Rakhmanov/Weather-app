import React from "react";

import styles from "./WeatherToday.module.scss";
import { WeatherCurrent } from "../components";

type Props = {
  data: WeatherCurrent;
};

const WeatherToday = ({ data }: Props) => {
  console.log(data.icon);
  return (
    <div className={styles.wrapper}>
      {data.icon}
      <img src="" alt="weather icon" />
    </div>
  );
};

export default WeatherToday;
