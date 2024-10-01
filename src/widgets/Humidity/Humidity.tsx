import { Tile } from "@/shared/shared";

import styles from "./Humidity.module.scss";

interface Props {
  humidity: number;
  dew: number;
}

export const Humidity = ({ humidity, dew }: Props) => {
  return (
    <Tile className={styles.tile}>
      <h3 className={styles.title}>Humidity</h3>
      <div className={styles.content}>
        <div className={styles.humidity}>{Math.round(humidity)} %</div>
      </div>
      <div className={styles.dew}>
        Dew temperature now is: {Math.round(dew)}°
      </div>
    </Tile>
  );
};
