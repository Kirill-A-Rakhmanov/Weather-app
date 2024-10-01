import { Tile } from "@/shared/shared";
import styles from "./UVIndex.module.scss";

interface Props {
  uvindex: number;
}

export const UVIndex = ({ uvindex }: Props) => {
  const getIndexDescription = (index: number) => {
    switch (index) {
      case 0:
        return "Low";
      case 1:
        return "Low";
      case 2:
        return "Low";
      case 3:
        return "Moderate";
      case 4:
        return "Moderate";
      case 5:
        return "Moderate";
      case 6:
        return "High";
      case 7:
        return "High";
      case 8:
        return "Very high";
      case 9:
        return "Very high";
      case 10:
        return "Very high";
      default:
        return "Extreme";
    }
  };

  return (
    <Tile className={styles.tile}>
      <h3 className={styles.title}>UV index</h3>
      <div className={styles.content}>
        <div className={styles.value}>{uvindex}</div>
      </div>
      <div className={styles.description}>{getIndexDescription(uvindex)}</div>
    </Tile>
  );
};
