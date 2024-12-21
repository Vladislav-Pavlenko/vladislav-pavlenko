import { useSelector } from "react-redux";
import {
  selectCurrentData,
  selectError,
  selectIsLoading,
} from "./../../../redux/fileStorage/selectors";
import styles from "./OutputWindow.module.css";
import Error from "../../../components/Error/Error";
import Loader from "@/app/components/Loader/Loader";

export default function OutputWindow() {
  const data = useSelector(selectCurrentData);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <section className={styles.section}>
      {error && <Error error={error} />}
      {isLoading ? (
        <Loader />
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
