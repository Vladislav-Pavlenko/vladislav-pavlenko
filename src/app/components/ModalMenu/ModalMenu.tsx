import Link from "next/link.js";
import styles from "./ModalMenu.module.css";
import clsx from "clsx";
import Footer from "../Footer/Footer";
import { useEffect } from "react";

interface ModalMenu {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  visible: boolean;
}
export default function ModalMenu({ setVisible, visible }: ModalMenu) {
  useEffect(() => {
    if (visible) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [visible]);

  return (
    <div
      className={clsx(styles.backdrop, visible ? styles.open : styles.close)}
    >
      <div className={styles.modal}>
        <div className={styles.header}>
          <Link className={styles.logo} href="/">
            vladyslav-pavlenko
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
        <Footer />
      </div>
    </div>
  );
}
