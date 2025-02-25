"use client";
import { useState } from "react";
import Header from "../components/Header/Header";
import ModalMenu from "../components/ModalMenu/ModalMenu";
import Footer from "../components/Footer/Footer";
import styles from "./page.module.css";
import ContactList from "./components/ContactList/ContactList";
import MessageForm from "./components/MessageForm/MessageForm";
import Link from "../about-me/components/Link/Link";
import OutputCode from "./components/OuptutCode/OutputCode";

export default function ContactMe() {
  const [visible, setVisible] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  return (
    <div className={styles.container}>
      <Header setVisible={setVisible} />
      <main className={styles.main}>
        <h1 className={styles.title}>_contact-me</h1>
        <section className={styles.section}>
          <ContactList name="contacts">
            <Link iconName="mail" link="mailto:vp632728@gmail.com">
              vp632728@gmail.com
            </Link>
            <Link iconName="phone" link="tel:380976817855">
              +380976817855
            </Link>
          </ContactList>
          <ContactList name="find-me-also-in">
            <Link
              iconName="instagram"
              link="https://www.instagram.com/pavlenko_vladislav/"
            >
              Instagram-accaunt
            </Link>
          </ContactList>
        </section>
        <MessageForm setValues={setFormValues} />
        <OutputCode
          name={formValues.name}
          email={formValues.email}
          message={formValues.message}
        />
      </main>
      <Footer />
      <ModalMenu setVisible={setVisible} visible={visible} />
    </div>
  );
}
