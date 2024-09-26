import { getTimeByTimezone, Tile } from "@/shared/shared";
import WeatherIcon from "@/shared/ui/WeatherIcon/WeatherIcon";
import styles from "./CurrentWeather.module.scss";

interface Props {
  temp: number;
  conditions: string;
  resolvedAddress: string;
  icon: string;
  tempmin: number;
  tempmax: number;
  tzoffset: number;
}

const CurrentWeather = (props: Props) => {
  const { hour, minutes } = getTimeByTimezone(props.tzoffset);

  return (
    <Tile shape="x4" className={styles.tile}>
      <div className={styles.top}>
        <h2 className={styles.title}>Current weather</h2>
        <div className={styles.time}>Time {[hour, minutes].join(":")}</div>
      </div>
      <WeatherIcon icon={props.icon} className={styles.icon} />
      <div className={styles.info}>
        <h3 className={styles.conditions}>{props.conditions}</h3>
        <div className={styles.tempInfo}>
          <div className={styles.min}>Min {Math.round(props.tempmin)} °C</div>
          <div className={styles.temp}>{Math.round(props.temp)} °C</div>
          <div className={styles.max}>Max {Math.round(props.tempmax)} °C</div>
        </div>
      </div>
    </Tile>
  );
};

export default CurrentWeather;
