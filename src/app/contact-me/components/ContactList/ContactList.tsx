import React, { useState } from "react";
import styles from "./ContactList.module.css";
import clsx from "clsx";
interface ContactListProps {
  children: React.ReactNode;
  name: string;
}
export default function ContactList({ name, children }: ContactListProps) {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
    setVisible((prev): boolean => !prev);
  };
  return (
    <>
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
      <ul className={clsx(styles.list, visible && styles.active)}>
        {children}
      </ul>
    </>
  );
}
