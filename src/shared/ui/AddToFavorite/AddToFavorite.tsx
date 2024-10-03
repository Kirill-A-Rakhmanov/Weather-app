import styles from "./AddToFavorite.module.scss";
import FavoriteIcon from "@/assets/icons/favorite.svg";
import FavoriteIconFilled from "@/assets/icons/favorite-filled.svg";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addToFavorite,
  removeFromFavorite,
  selectFavorite,
} from "@/redux/redux";

interface Props {
  resolvedAdddress: string;
}

export const AddToFavorite = ({ resolvedAdddress }: Props) => {
  const { list } = useAppSelector(selectFavorite);
  const dispatch = useAppDispatch();
  const findItem = list.find((obj) => obj.resolvedAddress === resolvedAdddress);

  const handleClick = () => {
    if (!findItem) {
      dispatch(addToFavorite(resolvedAdddress));
    } else {
      dispatch(removeFromFavorite(findItem.id));
    }
  };

  return (
    <button onClick={() => handleClick()} className={styles.wrapper}>
      {findItem ? (
        <FavoriteIconFilled className={styles.icon} />
      ) : (
        <FavoriteIcon className={styles.icon} />
      )}
    </button>
  );
};
