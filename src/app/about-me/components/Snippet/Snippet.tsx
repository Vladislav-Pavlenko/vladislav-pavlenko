import Image from "next/image.js";
import { TimeAgo } from "../TimeAgo/TimeAgo";
import styles from "./Snippet.module.css";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { updateSnippetStars } from "@/app/redux/snippets/operations";

interface SnippetProps {
  snippet: {
    id: string;
    snippet: string;
    stars: number;
    details: string;
  };
}

export default function Snippet({ snippet }: SnippetProps) {
  const dispatch = useDispatch<AppDispatch>();

  const storedStars = localStorage.getItem(`stars-${snippet.id}`);
  const storedLiked = localStorage.getItem(`liked-${snippet.id}`) === "true";

  const [visible, setVisible] = useState(false);
  const [star, setStar] = useState({
    stars: storedStars ? parseInt(storedStars, 10) : snippet.stars,
    liked: storedLiked,
  });

  useEffect(() => {
    localStorage.setItem(`stars-${snippet.id}`, star.stars.toString());
    localStorage.setItem(`liked-${snippet.id}`, star.liked.toString());
  });

  const changeVisible = () => {
    setVisible(!visible);
  };

  const changeStar = () => {
    const newStars = star.liked ? star.stars - 1 : star.stars + 1;
    setStar({
      stars: newStars,
      liked: !star.liked,
    });

    dispatch(updateSnippetStars({ id: snippet.id, stars: newStars }));
  };

  const date = new Date("2024-12-15");

  return (
    <>
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

        <button className={styles.btn_star} type="button" onClick={changeStar}>
          <svg
            className={clsx(styles.icon_star, star.liked && styles.liked)}
            width={18}
            height={18}
          >
            <use href="/images/icons.svg#icon-star"></use>
          </svg>
          {star.stars} stars
        </button>
      </div>

      <p
        className={styles.snippet_container}
        dangerouslySetInnerHTML={{
          __html: snippet?.snippet,
        }}
      />

      <div className={clsx(styles.details_modal, visible && styles.open)}>
        <p className={styles.details_message}>{snippet?.details}</p>
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
    </>
  );
}
