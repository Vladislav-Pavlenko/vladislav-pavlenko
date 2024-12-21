import Image from "next/image.js";
import styles from "./Error.module.css";
interface ErrorProps {
  error: Error | null;
}
export default function Error({ error }: ErrorProps) {
  return (
    <div className={styles.container}>
      <Image
        className={styles.error_image}
        src="/images/error.png"
        alt="error"
        width={140}
        height={60}
      />
      <p className={styles.error_message}>{error?.message}</p>
    </div>
  );
}
