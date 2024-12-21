"use client";
import { useState } from "react";
import Header from "../components/Header/Header";
import ModalMenu from "../components/ModalMenu/ModalMenu";

export default function ContactMe() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Header setVisible={setVisible} />
      <h1>Contact me</h1>
      <ModalMenu setVisible={setVisible} visible={visible} />
    </div>
  );
}
