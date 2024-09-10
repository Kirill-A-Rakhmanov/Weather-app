import React from "react";

import styles from "./Container.module.scss";
import clsx from "clsx";

type tProps = {
  className?: string;
};

export const Container: React.FC<React.PropsWithChildren<tProps>> = ({
  className,
  children,
}) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};
