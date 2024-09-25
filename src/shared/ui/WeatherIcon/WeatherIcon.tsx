import clsx from "clsx";
import styles from "./WeatherIcon.module.scss";

interface Props {
  icon: string;
  className?: string;
}

const WeatherIcon = ({ icon, className }: Props) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <img
        className={styles.image}
        src={`/weather icons/${icon}.svg`}
        alt="weather icon"
      />
    </div>
  );
};

export default WeatherIcon;
