import React from "react";
import styles from "./Favorite.module.scss";
import { FavoriteList } from "./FavoriteList/FavoriteList";

export const Favorite = () => {
  const [open, setOpen] = React.useState(false);
  const popupRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !e.composedPath().includes(popupRef.current)) {
        handleClose();
      }
    };
    document.body.addEventListener("click", (e) => handleClickOutside(e));

    return document.body.removeEventListener("click", (e) =>
      handleClickOutside(e)
    );
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div ref={popupRef}>
      <button onClick={() => handleClick()} className={styles.saved}>
        Saved locations
      </button>

      <FavoriteList onClose={() => handleClose()} open={open} />
    </div>
  );
};
