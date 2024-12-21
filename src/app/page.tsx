"use client";
import Header from "./components/Header/Header";
import styles from "./page.module.css";
import Hero from "./components/Hero/Hero";
import FindMe from "./components/FindMe/FindMe";
import { useState } from "react";
import ModalMenu from "./components/ModalMenu/ModalMenu";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";
export default function Hello() {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.container}>
      <Header setVisible={setVisible} />
      <main className={styles.main}>
        <div className={styles.info_container}>
          <Hero />
          <FindMe />
        </div>
        <div className={styles.slider_container}>
          <Slider />
        </div>
      </main>
      <div className={styles.footer_container}>
        <Footer />
      </div>

      <ModalMenu setVisible={setVisible} visible={visible} />
    </div>
  );
}
