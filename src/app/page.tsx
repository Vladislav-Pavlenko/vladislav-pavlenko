"use client";
import Header from "./components/Header/Header";
import styles from "./page.module.css";
import Hero from "./components/Hero/Hero";
import FindMe from "./components/FindMe/FindMe";
import { useState } from "react";
import ModalMenu from "./components/ModalMenu/ModalMenu";
export default function Hello() {
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.container}>
      <Header setVisible={setVisible} />
      <main>
        <Hero />
        <FindMe />
      </main>
      <ModalMenu setVisible={setVisible} visible={visible} />
    </div>
  );
}
