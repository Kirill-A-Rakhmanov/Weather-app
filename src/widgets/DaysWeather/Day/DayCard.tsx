import { Day, getWeekDay, WeatherFull, WeatherIcon } from "@/shared/shared";
import styles from "./DayCard.module.scss";

interface Props {
  day: Day<WeatherFull>;
}

export const DayCard = ({ day }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.weekday}>{getWeekDay(day.datetime)}</div>
      <WeatherIcon icon={day.icon} className={styles.icon} />
      <div className={styles.temp}>
        {Math.round(day.tempmin!)}° - {Math.round(day.tempmax!)}°
      </div>
    </div>
  );
};
