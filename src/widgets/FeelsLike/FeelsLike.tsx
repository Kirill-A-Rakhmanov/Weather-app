import { Tile } from "@/shared/shared";
import styles from "./FeelsLike.module.scss";

interface Props {
  temp: number;
  feelslike: number;
}

export const FeelsLike = ({ feelslike, temp }: Props) => {
  const getDescription = (actualTemp: number, feelslike: number) => {
    if (Math.round(feelslike) > Math.round(actualTemp)) {
      return "It feels warmer";
    } else if (Math.round(feelslike) < Math.round(actualTemp)) {
      return "It feels colder";
    } else {
      return "It feels like an actual temperature";
    }
  };

  return (
    <Tile className={styles.tile}>
      <h3 className={styles.title}>Feels like</h3>
      <div className={styles.content}>
        <div className={styles.value}>{Math.round(feelslike)}°</div>
      </div>
      <div className={styles.description}>
        {getDescription(temp, feelslike)}
      </div>
    </Tile>
  );
};
