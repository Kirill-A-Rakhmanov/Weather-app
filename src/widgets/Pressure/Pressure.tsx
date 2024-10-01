import { Tile } from "@/shared/shared";
import styles from "./Pressure.module.scss";

interface Props {
  pressure: number;
}

export const Pressure = ({ pressure }: Props) => {
  const convertMillibarsToMmhg = (value: number) => {
    return Math.round((value * 750.062) / 1000);
  };

  return (
    <Tile className={styles.tile}>
      <h3 className={styles.title}>Pressure</h3>
      <div className={styles.content}>
        <div className={styles.value}>{convertMillibarsToMmhg(pressure)}</div>
      </div>
      <div className={styles.description}>mmHg</div>
    </Tile>
  );
};
