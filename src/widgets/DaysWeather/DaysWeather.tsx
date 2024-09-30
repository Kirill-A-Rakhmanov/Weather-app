import { Day, Tile, WeatherFull } from "@/shared/shared";
import styles from "./DaysWeather.module.scss";
import { DayCard } from "./Day/DayCard";

interface Props {
  days: Day<WeatherFull>[];
}

export const DaysWeather = ({ days }: Props) => {
  return (
    <Tile className={styles.tile} shape="x4">
      <h3 className={styles.title}>10 days forecast</h3>
      <div className={styles.content}>
        {days.map((obj) => (
          <DayCard key={obj.datetime} day={obj} />
        ))}
      </div>
    </Tile>
  );
};
