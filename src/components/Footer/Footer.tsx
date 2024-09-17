import { Container } from "@/shared/shared";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.content}>Made by Kirill Rakhmanov</div>
        <a href="" className={styles.home}>
          Back to porfolio page
        </a>
      </Container>
    </footer>
  );
};
