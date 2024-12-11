import styles from "./Snippet.module.css";
export default function Snippet() {
  return (
    <p className={styles.container}>
      <span className={styles.red}>function</span> initializeModelChunk
      <span className={styles.violet}>{"<"}</span>
      <span className={styles.green}>T</span>
      <span className={styles.violet}>{">"}</span>(chunk: ResolvedModelChunk):{" "}
      <span className={styles.red}>T</span> {"{"}
      <br />
      &nbsp;&nbsp;<span className={styles.red}>const</span> value:{" "}
      <span className={styles.red}>T</span>{" "}
      <span className={styles.violet}> = </span>
      <span className={styles.rose}>parseModel</span>(chunk.
      <span className={styles.violet}>_response</span>, chunk.
      <span className={styles.violet}>_value</span>);
      <br />
      &nbsp;&nbsp;<span className={styles.red}>
        const
      </span> initializedChunk:{" "}
      <span className={styles.red}>InitializedChunk</span>
      <span className={styles.violet}>{"<"}</span>
      <span className={styles.red}>T</span>
      <span className={styles.violet}>{">"}</span>
      <span className={styles.violet}> = </span>(chunk:{" "}
      <span className={styles.green}>any</span>);
      <br />
      &nbsp;&nbsp;initializedChunk.
      <span className={styles.violet}>_status = INITIALIZED</span>;
      <br />
      &nbsp;&nbsp;initializedChunk.
      <span className={styles.violet}>_value = </span>value;
      <br />
      &nbsp;&nbsp;<span className={styles.red}>return</span> value;
      <br />
      {"}"}
    </p>
  );
}
