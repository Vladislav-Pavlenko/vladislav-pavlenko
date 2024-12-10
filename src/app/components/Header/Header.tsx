import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation.js";
import clsx from "clsx";
interface HeaderProps {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Header({ setVisible }: HeaderProps) {
  const pathname = usePathname();
  const activeTab = (path: string) =>
    clsx(styles.menu_link, pathname === path && styles.active);
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        vladislav-pavlenko
      </Link>
      <ul className={styles.menu}>
        <li className={styles.menu_item}>
          <Link className={activeTab("/")} href="/">
            _hello
          </Link>
        </li>
        <li className={styles.menu_item}>
          <Link className={activeTab("/about-me")} href="/about-me">
            _about-me
          </Link>
        </li>
        <li className={styles.menu_item}>
          <Link className={activeTab("/projects")} href="/projects">
            _projects
          </Link>
        </li>
        <li className={styles.menu_item}>
          <Link className={activeTab("/contact-me")} href="/contact-me">
            _contact-me
          </Link>
        </li>
      </ul>
      <button className={styles.btn} onClick={() => setVisible(true)}>
        <svg className={styles.svg} width={18} height={16}>
          <use href="/images/icons.svg#icon-menu"></use>
        </svg>
      </button>
    </header>
  );
}
