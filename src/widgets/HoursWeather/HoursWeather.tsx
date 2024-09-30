import { Tile, useDatetime, WeatherFull } from "@/shared/shared";
import styles from "./HoursWeather.module.scss";
import { Hour } from "./Hour/Hour";

interface Props {
  hours: WeatherFull[];
  tzoffset: number;
}

export const HoursWeather = ({ hours, tzoffset }: Props) => {
  const { date, month, year } = useDatetime(tzoffset);

  return (
    <Tile className={styles.tile} shape="x2">
      <div className={styles.top}>
        <h3 className={styles.title}>Weather by hours</h3>
        <div className={styles.date}>{[date, month, year].join(".")}</div>
      </div>
      <div className={styles.content}>
        {hours.map((obj: WeatherFull) => (
          <Hour
            datetime={obj.datetime}
            icon={obj.icon}
            temp={obj.temp}
            key={obj.datetime}
          />
        ))}
      </div>
    </Tile>
  );
};
