import { WeatherIcon } from "@/shared/shared";
import styles from "./Hour.module.scss";
import React from "react";

interface Props {
  datetime: string;
  icon: string;
  temp: number;
}

export const Hour = React.memo(({ datetime, icon, temp }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hour}>{datetime.split(":")[0]}</div>
      <WeatherIcon className={styles.icon} icon={icon} />
      <div className={styles.temp}>{Math.round(temp)} °C</div>
    </div>
  );
});
