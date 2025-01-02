import { useId } from "react";
import styles from "./FiltersListItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { fetchProjects } from "@/app/redux/projects/operations";
import { selectProjectsFilters } from "@/app/redux/projects/selectors";

interface FilterCheckboxProps {
  children: React.ReactNode;
  iconName: string;
}

export default function FilterListItem({
  children,
  iconName,
}: FilterCheckboxProps) {
  const inputId = useId();
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector(selectProjectsFilters);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    if (checked) {
      dispatch(fetchProjects({ ...filters, [name]: true }));
    } else {
      const updatedFilters = { ...filters };
      delete updatedFilters[name];
      dispatch(fetchProjects(updatedFilters));
    }
  };

  return (
    <li>
      <label htmlFor={inputId} className={styles.label}>
        <input
          type="checkbox"
          name={iconName}
          id={inputId}
          className={styles.input}
          onChange={handleCheckboxChange}
          checked={iconName in filters}
        />
        <svg className={styles.icon} width={16} height={15.5}>
          <use href={`/images/icons.svg#icon-${iconName}`}></use>
        </svg>
        {children}
      </label>
    </li>
  );
}
