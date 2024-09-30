import { Tile } from "@/shared/shared";

import styles from "./Humidity.module.scss";

interface Props {
  humidity: number;
}

export const Humidity = ({ humidity }: Props) => {
  return (
    <Tile className={styles.tile}>
      <h3 className={styles.title}>Humidity</h3>
      <div className={styles.content}>
        <div className={styles.humidity}>{humidity}</div>
      </div>
    </Tile>
  );
};
