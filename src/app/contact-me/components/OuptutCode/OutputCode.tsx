import { format } from "date-fns";
import styles from "./OutputCode.module.css";
interface OutputCodeProps {
  name: string;
  email: string;
  message: string;
}
export default function OutputCode({ name, email, message }: OutputCodeProps) {
  const date = new Date();
  const currentDate = format(date, "EEE dd MMM");
  return (
    <section className={styles.section}>
      <pre className={styles.code}>
        1&nbsp;&nbsp;&nbsp;<span className={styles.rose}>const</span>{" "}
        <span className={styles.violet}>button</span>{" "}
        <span className={styles.rose}>=</span>&nbsp;
        <span className={styles.violet}>document</span>.
        <span className={styles.violet}>querySelector</span>(
        <span className={styles.orange}>&apos;#sendBtn&apos;</span>);
        <br />2
        <br />
        3&nbsp;&nbsp;&nbsp;<span className={styles.rose}>const</span>{" "}
        <span className={styles.violet}>message</span>{" "}
        <span className={styles.rose}>=</span> {"{"}
        <br />
        4&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.violet}>name</span>:
        <span className={styles.orange}>&nbsp;&quot;{name}&quot;</span>
        ,
        <br />
        5&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.violet}>email</span>:
        <span className={styles.orange}>&nbsp;&quot;{email}&quot;</span>,
        <br />
        6&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.violet}>message</span>:
        <span className={styles.orange}>&nbsp;&quot;{message}&quot;</span>,
        <br />
        7&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.violet}>date</span>:
        <span className={styles.orange}>&nbsp;&quot;{currentDate}&quot;</span>
        <br />
        8&nbsp;&nbsp;&nbsp;{"}"};
        <br />9
        <br />
        10&nbsp;&nbsp;&nbsp;<span className={styles.violet}>button</span>.
        <span className={styles.violet}>addEventListener</span>(
        <span className={styles.orange}>&apos;click&apos;</span>, (){" "}
        <span className={styles.rose}>={">"}</span> {"{"}
        <br />
        11&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.violet}>form</span>.
        <span className={styles.violet}>send</span>(
        <span className={styles.violet}>message</span>);
        <br />
        12&nbsp;&nbsp;&nbsp;{"}"});
      </pre>
    </section>
  );
}
