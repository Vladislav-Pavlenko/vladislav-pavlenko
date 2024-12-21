import styles from "./AboutList.module.css";
interface AboutListProps {
  children: React.ReactNode;
}
export default function AboutList({ children }: AboutListProps) {
  return <ul className={styles.list}>{children}</ul>;
}
