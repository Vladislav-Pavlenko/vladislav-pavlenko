import styles from "./Hero.module.css";
export default function Hero() {
  return (
    <section className={styles.section}>
      <p className={styles.welcome}>Hi all. I am</p>
      <h1 className={styles.title}>Vladislav Pavlenko</h1>
      <p className={styles.position}> &gt; Front-end developer</p>
    </section>
  );
}
