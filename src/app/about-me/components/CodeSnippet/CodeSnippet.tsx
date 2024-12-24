import Snippets from "@/app/components/Snippets/Snippets";
import styles from "./CodeSnippet.module.css";
import Snippet from "../Snippet/Snippet";
interface itemSnippet {
  id: string;
  snippet: string;
  stars: number;
}
export default function CodeSnippet() {
  const snippets = Snippets();
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{"//"} Code snippet showcase:</h2>
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
