import { useSelector } from "react-redux";
import {
  selectCurrentData,
  selectError,
  selectIsLoading,
} from "./../../../redux/fileStorage/selectors";
import styles from "./OutputWindow.module.css";
import { Triangle } from "react-loader-spinner";
import Error from "../Error/Error";

export default function OutputWindow() {
  const data = useSelector(selectCurrentData);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <section className={styles.section}>
      {error && <Error error={error} />}
      {isLoading ? (
        <Triangle
          visible={true}
          color="#ffffff"
          ariaLabel="triangle-loading"
          wrapperClass={styles.loader}
        />
      ) : (
        <>
          <h2 className={styles?.path}>
            {data?.category}&nbsp;
            <span className={styles.path_span}>{data?.folder}</span>
          </h2>
          <p
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: data?.text }}
          />
        </>
      )}
    </section>
  );
}
