import { Triangle } from "react-loader-spinner";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <Triangle
      visible={true}
      color="#ffffff"
      ariaLabel="triangle-loading"
      wrapperClass={styles.loader}
    />
  );
}
