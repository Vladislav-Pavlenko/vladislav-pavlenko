"use client";
import { useState } from "react";
import Header from "../components/Header/Header";
import ModalMenu from "../components/ModalMenu/ModalMenu";

export default function Projects() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Header setVisible={setVisible} />
      <h1>Projects</h1>
      <ModalMenu setVisible={setVisible} visible={visible} />
    </div>
  );
}
