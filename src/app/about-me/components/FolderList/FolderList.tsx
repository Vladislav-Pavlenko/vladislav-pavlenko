import styles from "./FolderList.module.css"
interface FolderListProps {
  children: React.ReactNode;
}
export default function FolderList({ children }: FolderListProps) {
  return <ul className={styles.list}>{children}</ul>;
}
