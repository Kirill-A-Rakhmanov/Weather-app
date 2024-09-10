import React from "react";

import styles from "./Header.module.scss";
import { Container } from "../../shared/shared";
import { Search } from "../Search/Search";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <a href="/" className={styles.logo}>
          WEATHER APP
        </a>
        <div className={styles.search}>
          <Search />
        </div>
        <div className={styles.info}>
          <button className={styles.saved}>Saved locations</button>
        </div>
      </Container>
    </header>
  );
};
