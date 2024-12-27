import Snippets from "@/app/components/Snippets/Snippets";
import styles from "./CodeSnippet.module.css";
import Snippet from "../Snippet/Snippet";
import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "@/app/redux/snippets/selectors";
import Loader from "@/app/components/Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
interface itemSnippet {
  id: string;
  snippet: string;
  stars: number;
}
export default function CodeSnippet() {
  const snippets = Snippets();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  console.log(error?.message);
  if (error) {
    toast.error(error?.message);
  }
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{"//"} Code snippet showcase:</h2>
      {isLoading && <Loader />}
      <Toaster />
      <ul className={styles.list}>
        {snippets.map((item: itemSnippet, index: number) => {
          return (
            <li key={index} className={styles.item}>
              <Snippet snippet={item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
