import styles from "./Message.module.css";
interface MessageProps {
  setVisible: () => void;
  error?: boolean;
}
export default function Message({ setVisible, error = false }: MessageProps) {
  return (
    <section className={styles.section}>
      {error ? (
        <>
          <h1 className={styles.title}>Oops something went wrong ❌</h1>
          <p className={styles.description}>
            We were unable to send your message. Please check your internet
            connection or try again later.
          </p>
          <button className={styles.btn} type="button" onClick={setVisible}>
            try-again
          </button>
        </>
      ) : (
        <>
          <h1 className={styles.title}>Thank you! 🤘</h1>
          <p className={styles.description}>
            Your message has been accepted. You will recieve answer really soon!
          </p>
          <button className={styles.btn} type="button" onClick={setVisible}>
            send-new-message
          </button>
        </>
      )}
    </section>
  );
}
