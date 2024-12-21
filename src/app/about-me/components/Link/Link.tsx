import styles from "./Link.module.css";
interface LinkProps {
  children: React.ReactNode;
  iconName: string;
  link: string;
  download?: boolean;
}
export default function Link({
  children,
  iconName,
  link,
  download = false,
}: LinkProps) {
  return (
    <li className={styles.li}>
      <a className={styles.link} href={link} download={download}>
        <svg className={styles.icon} width={16} height={15.5}>
          <use href={`/images/icons.svg#icon-${iconName}`}></use>
        </svg>
        {children}
      </a>
    </li>
  );
}
