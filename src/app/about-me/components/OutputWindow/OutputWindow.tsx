import { useSelector } from "react-redux";
import {
  selectCurrentData,
  selectError,
  selectIsLoading,
} from "@/app/redux/fileStorage/selectors";
import styles from "./OutputWindow.module.css";
import Error from "@/app/components/Error/Error";
import Loader from "@/app/components/Loader/Loader";

export default function OutputWindow() {
  const data = useSelector(selectCurrentData);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <section className={styles.section}>
      {error && <Error error={error} />}
      {isLoading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
        <>
          <h2 className={styles?.path}>
            {data?.category || "// category"}&nbsp;
            <span className={styles.path_span}>
              {data?.folder || "/ folder"}
            </span>
          </h2>
          <p
            className={styles.text}
            dangerouslySetInnerHTML={{
              __html: data?.text || "Choose what interests you :)",
            }}
          />
        </>
      )}
    </section>
  );
}
