import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.p}>find me in:</p>
      <ul className={styles.soc_list}>
        <li className={styles.soc_item}>
          <a
            className={styles.soc_link}
            href="https://t.me/v_pavl_v"
            target="_blank"
          >
            <svg className={styles.soc_icon} width={24} height={24}>
              <use href="/images/icons.svg#icon-telegram"></use>
            </svg>
          </a>
        </li>
        <li className={styles.soc_item}>
          <a
            className={styles.soc_link}
            href="www.linkedin.com/in/pavlenko-vladislav"
            target="_blank"
          >
            <svg className={styles.soc_icon} width={24} height={24}>
              <use href="/images/icons.svg#icon-linkedin"></use>
            </svg>
          </a>
        </li>
        <li className={styles.soc_item}>
          <a
            className={styles.soc_link}
            href="https://github.com/Vladislav-Pavlenko"
            target="_blank"
          >
            <span className={styles.foooter_username}>@vladislav_pavlenko</span>
            <svg className={styles.soc_icon} width={24} height={24}>
              <use href="/images/icons.svg#icon-github"></use>
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
}
