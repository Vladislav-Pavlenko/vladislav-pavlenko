import Image from "next/image.js";
import { TimeAgo } from "./../TimeAgo/TimeAgo";
import styles from "./CodeSnippet.module.css";
import clsx from "clsx";
import { useState } from "react";

export default function CodeSnippet() {
  const [visible, setVisible] = useState(false);
  const date = new Date("2024-12-15");

  const changeVisible = () => {
    setVisible(!visible);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{"//"} Code snippet showcase:</h2>
      <div className={styles.container}>
        <Image
          className={styles.img}
          src="/images/portfolio-img.jpg"
          alt="Vladyslav Pavlenko"
          width={36}
          height={36}
        />
        <div className={styles.info_container}>
          <a
            className={styles.link}
            href="https://github.com/Vladislav-Pavlenko"
            target="_blank"
          >
            @vladyslav
          </a>
          <p className={styles.time_ago}>
            <TimeAgo date={date} />
          </p>
        </div>
        <button className={styles.btn} type="button" onClick={changeVisible}>
          <svg className={styles.icon} width={18} height={18}>
            <use href="/images/icons.svg#icon-comment"></use>
          </svg>
          details
        </button>
      </div>
      <p className={styles.snippet_container}>
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
      <div className={clsx(styles.details_modal, visible && styles.open)}>
        <p className={styles.details_message}>
          My work here was 5 months ago. It was for the project called “...”.
          Some other text can be placed here.
        </p>
        <button
          className={styles.details_btn}
          type="button"
          onClick={changeVisible}
        >
          <svg className={styles.details_icon} width={10} height={10}>
            <use href="/images/icons.svg#icon-close"></use>
          </svg>
        </button>
      </div>
    </section>
  );
}
