import styles from "./FindMe.module.css";
export default function FindMe() {
  return (
    <section className={styles.section}>
      <p className={styles.comment}>{"//"} find my profile on Github:</p>
      <a
        className={styles.link}
        target="_blank"
        href="https://github.com/Vladislav-Pavlenko"
      >
        <span className={styles.const}>const</span>{" "}
        <span className={styles.name}>githubLink</span> ={" "}
        <span className={styles.githubLink}>
          {"\u201C"}https://github.com/Vladislav-Pavlenko
          {"\u201D"}
        </span>
      </a>
    </section>
  );
}
