import styles from "./FileList.module.css";
interface FileListProps {
  children: React.ReactNode;
}
export default function FileList({ children }: FileListProps) {
  return <ul className={styles.list}>{children}</ul>;
}
