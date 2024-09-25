import React from "react";

import styles from "./Tile.module.scss";
import clsx from "clsx";

type tProps = {
  className?: string;
  shape?: string;
};

export const Tile: React.FC<React.PropsWithChildren<tProps>> = ({
  className,
  shape,
  children,
}) => {
  return (
    <div className={clsx(styles.tile, shape && styles[shape], className)}>
      {children}
    </div>
  );
};
