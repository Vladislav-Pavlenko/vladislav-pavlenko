import { useId, useState } from "react";
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
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setIsChecked(checked);

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
          checked={isChecked || iconName in filters}
          onChange={handleCheckboxChange}
          className={styles.input}
        />
        {children}
      </label>
    </li>
  );
}
