import {
  Data,
  Tile,
  useDatetime,
  WeatherFull,
  WeatherIcon,
} from "@/shared/shared";
import styles from "./CurrentWeather.module.scss";

interface Props {
  data: Data<WeatherFull>;
}

export const CurrentWeather = (props: Props) => {
  const temp = props.data.currentConditions.temp;
  const icon = props.data.currentConditions.icon;
  // const resolvedAddress = props.data.resolvedAddress;
  const conditions = props.data.currentConditions.conditions;
  const tempmin = props.data.days![0].tempmin!;
  const tempmax = props.data.days![0].tempmax!;
  const tzoffset = props.data.tzoffset;

  const { hour, minutes } = useDatetime(tzoffset);

  return (
    <Tile shape="x4" className={styles.tile}>
      <div className={styles.top}>
        <h2 className={styles.title}>Current weather</h2>
        <div className={styles.time}>{[hour, minutes].join(":")}</div>
      </div>
      <WeatherIcon icon={icon} className={styles.icon} />
      <div className={styles.info}>
        <h3 className={styles.conditions}>{conditions}</h3>
        <div className={styles.tempInfo}>
          <div className={styles.min}>Min {Math.round(tempmin)}°</div>
          <div className={styles.temp}>{Math.round(temp)} °C</div>
          <div className={styles.max}>Max {Math.round(tempmax)}°</div>
        </div>
      </div>
    </Tile>
  );
};
