import { Tile } from "@/shared/shared";
import WeatherIcon from "@/shared/ui/WeatherIcon/WeatherIcon";
import styles from "./CurrentWeather.module.scss";

interface Props {
  temp: number;
  conditions: string;
  resolvedAddress: string;
  icon: string;
}

const CurrentWeather = (props: Props) => {
  return (
    <Tile shape="x4">
      {props.icon} {Math.round(props.temp)}
      <WeatherIcon icon={props.icon} className={styles.icon} />
    </Tile>
  );
};

export default CurrentWeather;
