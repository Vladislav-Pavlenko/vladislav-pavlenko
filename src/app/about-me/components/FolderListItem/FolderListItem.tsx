import clsx from "clsx";
import styles from "./FolderListItem.module.css";
import { useState } from "react";
interface FolderListItemProps {
  children: React.ReactNode;
  name: string;
  color: string;
}
export default function FolderListItem({
  children,
  name,
  color,
}: FolderListItemProps) {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
    setVisible((prev): boolean => !prev);
  };
  const folderColor = clsx(
    styles.icon,
    color === "red" && styles.red,
    color === "green" && styles.green,
    color === "violet" && styles.violet
  );

  return (
    <li className={styles.li}>
      <button
        className={clsx(styles.btn, visible && styles.active)}
        type="button"
        onClick={toggleVisibility}
      >
        <svg
          className={clsx(styles.icon_arrow, visible && styles.rotate)}
          width={13}
          height={8}
        >
          <use href="/images/icons.svg#icon-arrow"></use>
        </svg>
        <svg className={folderColor} width={14.5} height={13}>
          <use href="/images/icons.svg#icon-folder"></use>
        </svg>
        {name}
      </button>
      <div className={clsx(styles.container, visible && styles.active)}>
        {children}
      </div>
    </li>
  );
}
