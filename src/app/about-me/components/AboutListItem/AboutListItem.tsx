import { useState } from "react";
import styles from "./AboutListItem.module.css";
import clsx from "clsx";
interface AboutListItemProps {
  children: React.ReactNode;
  name: string;
}
export default function AboutListItem({ children, name }: AboutListItemProps) {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
    setVisible((prev): boolean => !prev);
  };
  return (
    <li className={styles.li}>
      <button className={styles.btn} type="button" onClick={toggleVisibility}>
        <svg
          className={clsx(styles.icon, visible && styles.rotate)}
          width={11}
          height={8}
        >
          <use href="/images/icons.svg#icon-custom-point"></use>
        </svg>
        {name}
      </button>
      <div className={clsx(styles.container, visible && styles.active)}>
        {children}
      </div>
    </li>
  );
}
