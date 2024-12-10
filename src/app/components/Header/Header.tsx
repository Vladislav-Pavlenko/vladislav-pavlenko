import Link from "next/link";
import styles from "./Header.module.css";
interface HeaderProps {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Header({ setVisible }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/hello">
        vladislav-pavlenko
      </Link>
      <button className={styles.btn} onClick={() => setVisible(true)}>
        <svg className={styles.svg} width={18} height={16}>
          <use href="/images/icons.svg#icon-menu"></use>
        </svg>
      </button>
    </header>
  );
}
