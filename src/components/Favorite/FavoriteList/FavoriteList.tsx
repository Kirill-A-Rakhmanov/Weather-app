import { useAppSelector } from "@/redux/hooks";
import styles from "./FavoriteList.module.scss";
import { selectFavorite } from "@/redux/redux";
import clsx from "clsx";
import { WeatherFavorite } from "@/widgets/widgets";

interface Props {
  open: boolean;
  onClose: React.MouseEventHandler;
}

export const FavoriteList = ({ open, onClose }: Props) => {
  const { list } = useAppSelector(selectFavorite);
  return (
    <div className={clsx(styles.wrapper, open && styles.active)}>
      <div onClick={onClose} className={styles.close}>
        Close
      </div>
      <div className={styles.content}>
        {list.length ? (
          list.map((obj) => <WeatherFavorite key={obj.id} info={obj} />)
        ) : (
          <div className={styles.empty}>The list is empty</div>
        )}
      </div>
    </div>
  );
};
