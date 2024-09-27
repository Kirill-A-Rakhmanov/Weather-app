import styles from "./Spinner.module.scss";
import { Oval } from "react-loader-spinner";

export const Spinner = () => {
  return (
    <div className={styles.wrapper}>
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#010303"
        secondaryColor=""
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
