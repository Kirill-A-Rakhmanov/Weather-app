import styles from "./Header.module.scss";
import { Container } from "@/shared/shared";
import { Favorite, Search } from "../components";

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
          <Favorite />
        </div>
      </Container>
    </header>
  );
};
