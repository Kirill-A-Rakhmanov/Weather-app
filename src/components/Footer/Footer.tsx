import React from "react";

import styles from "./Footer.module.scss";
import { Container } from "../../shared/shared";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.content}>Made by Kirill Rakhmanov</div>
      </Container>
    </footer>
  );
};
