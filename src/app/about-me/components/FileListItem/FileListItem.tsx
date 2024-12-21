import { useDispatch, useSelector } from "react-redux";
import styles from "./FileListItem.module.css";
import { fetchAboutData } from "@/app/redux/fileStorage/operations";
import { AppDispatch } from "@/app/redux/store";
import { selectData } from "@/app/redux/fileStorage/selectors";
import { setCurrent } from "@/app/redux/fileStorage/slice";

interface FileListItemProps {
  children: string;
}
interface AboutDataItem {
  id: string;
  category: string;
  folder: string;
  file: string;
  text: string;
}

export default function FileListItem({ children }: FileListItemProps) {
  const dispatch = useDispatch<AppDispatch>();
  const allData = useSelector(selectData);

  const handleClick = () => {
    const existingItem = allData.find(
      (item: AboutDataItem) => item.file === children.toLowerCase()
    );

    if (existingItem) {
      dispatch(setCurrent(existingItem));
    } else {
      dispatch(fetchAboutData(children.toLowerCase()));
    }
  };

  return (
    <li className={styles.li}>
      <button className={styles.btn} type="button" onClick={handleClick}>
        <svg className={styles.icon} width={16} height={15}>
          <use href="/images/icons.svg#icon-file"></use>
        </svg>
        {children}
      </button>
    </li>
  );
}
