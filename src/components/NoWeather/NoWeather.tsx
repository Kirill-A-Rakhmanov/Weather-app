import styles from "./NoWeather.module.scss";

export const NoWeather = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>
        Get current weather from wherever on Earth
      </h1>
      <p className={styles.subtitle}>
        Type city name in the search bar and you will see everything
      </p>
    </div>
  );
};
