import { Tile } from "@/shared/shared";
import styles from "./Wind.module.scss";

import Arrow from "@/assets/arrow.png";
import Compass from "@/assets/compass.png";

interface Props {
  winddir: number;
  windspeed: number;
  maxwindspeed: number;
}

export const Wind = ({ winddir, windspeed, maxwindspeed }: Props) => {
  const convertKmhToMs = (value: number) => {
    return Math.round(value / 3.6);
  };

  const getDirectionDescription = (value: number) => {
    const sides: string[] = [
      "North",
      "North-East",
      "East",
      "South-East",
      "South",
      "South-West",
      "West",
      "North-West",
    ];
    return sides[Math.round(value / 45)];
  };

  return (
    <Tile className={styles.tile} shape="x2">
      <div className={styles.top}>
        <h3 className={styles.title}>Wind</h3>
        <div className={styles.description}>
          {getDirectionDescription(winddir)}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.speed}>
            Current: {convertKmhToMs(windspeed)} m/s
          </div>
          <div className={styles.speed}>
            Max: {convertKmhToMs(maxwindspeed)} m/s
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.direction}>
            <img src={Compass} alt="compass" className={styles.compass} />
            <img
              src={Arrow}
              alt="arrow"
              className={styles.arrow}
              style={{ transform: `rotate(${winddir + 90}deg) scale(30%)` }}
            />
          </div>
        </div>
      </div>
    </Tile>
  );
};
