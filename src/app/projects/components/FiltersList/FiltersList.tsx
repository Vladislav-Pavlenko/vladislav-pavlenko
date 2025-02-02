import clsx from "clsx";
import FiltersListItem from "../FiltersListItem/FilterListItem";
import styles from "./FilterList.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectProjectsFilters } from "@/app/redux/projects/selectors";

export default function FiltersList() {
  const [visible, setVisible] = useState(false);
  const filters = useSelector(selectProjectsFilters);
  const toggleVisibility = () => {
    setVisible((prev): boolean => !prev);
  };
  return (
    <section className={styles.section}>
      <button className={styles.btn} type="button" onClick={toggleVisibility}>
        <svg
          className={clsx(styles.icon, !visible && styles.rotate)}
          width={11}
          height={8}
        >
          <use href="/images/icons.svg#icon-custom-point"></use>
        </svg>
        projects
      </button>
      <ul
        className={clsx(
          styles.list,
          visible || (filters.length !== 0 && styles.active)
        )}
      >
        <FiltersListItem iconName="html">HTML</FiltersListItem>
        <FiltersListItem iconName="css">CSS</FiltersListItem>
        <FiltersListItem iconName="react">React</FiltersListItem>
        <FiltersListItem iconName="javascript">JavaScript</FiltersListItem>
        {/* <FiltersListItem iconName="typescript">TypeScript</FiltersListItem> */}
        <FiltersListItem iconName="node">Node</FiltersListItem>
      </ul>
    </section>
  );
}
