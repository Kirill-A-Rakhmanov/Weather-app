import { Tile } from "@/shared/shared";
import styles from "./Visibility.module.scss";

interface Props {
  visibility: number;
}

export const Visibility = ({ visibility }: Props) => {
  const getDescription = (value: number) => {
    if (value < 2) {
      return "Poor";
    } else if (value < 10) {
      return "Low";
    } else if (value < 30) {
      return "Moderate";
    } else {
      return "Clear";
    }
  };

  return (
    <Tile className={styles.tile}>
      <h3 className={styles.title}>Visibility</h3>
      <div className={styles.content}>
        <div className={styles.value}>{Math.round(visibility)} km</div>
      </div>
      <div className={styles.description}>{getDescription(visibility)}</div>
    </Tile>
  );
};
