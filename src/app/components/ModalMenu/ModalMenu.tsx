import Link from "next/link.js";
import styles from "./ModalMenu.module.css";
import clsx from "clsx";

interface ModalMenu {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  visible: boolean;
}
export default function ModalMenu({ setVisible, visible }: ModalMenu) {
  return (
    <div className={clsx(styles.backdrop, visible ? styles.open : styles.close)}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <Link className={styles.logo} href="/">
            vladislav-pavlenko
          </Link>
          <button className={styles.btn} onClick={() => setVisible(false)}>
            <svg className={styles.svg} width={16} height={16}>
              <use href="/images/icons.svg#icon-close"></use>
            </svg>
          </button>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link className={styles.page} href="/">
              _hello
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.page} href="/about-me">
              _about-me
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.page} href="/projects">
              _projects
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.page} href="/contact-me">
              _contact-me
            </Link>
          </li>
        </ul>
        <div className={styles.footer}>
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
                <svg className={styles.soc_icon} width={24} height={24}>
                  <use href="/images/icons.svg#icon-github"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
