import { useId, useState } from "react";
import Message from "../Message/Message";
import styles from "./MessageForm.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { clsx } from "clsx";
import axios from "axios";
import Loader from "@/app/components/Loader/Loader";

interface formikValues {
  name: string;
  email: string;
  message: string;
}
interface MessageFormProps {
  setValues: React.Dispatch<
    React.SetStateAction<{ name: string; email: string; message: string }>
  >;
}
export default function MessageForm({ setValues }: MessageFormProps) {
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fieldId = {
    name: useId(),
    email: useId(),
    message: useId(),
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 character")
      .max(30, "Name must be at most 30 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(6, "Message must be at least 6 characters")
      .max(250, "Message must be at most 250 characters")
      .required("Message is required"),
  });

  const handleSubmit = async (
    values: formikValues,
    actions: FormikHelpers<formikValues>
  ) => {
    try {
      setVisible(false);
      setError(false);
      setLoading(true);
      const response = await axios.post("/api/send_email", values);
      if (response.status === 200) {
        setVisible(true);
        setLoading(false);
        setError(false);
        setValues({ name: "", email: "", message: "" });
        actions.resetForm();
      } else {
        setVisible(true);
        setLoading(false);
        setError(true);
        console.error("Error: Non-success response from the server.");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error);
        setVisible(true);
        setLoading(false);
        setError(true);
      }
    }
  };

  return (
    <section className={styles.section}>
      <div className={clsx(styles.form, loading && styles.visible)}>
        <Loader />
      </div>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange }) => (
          <Form
            className={clsx(
              styles.form,
              !visible && !loading && styles.visible
            )}
          >
            <label className={styles.label} htmlFor={fieldId.name}>
              _name:
              <Field
                className={styles.field}
                type="text"
                name="name"
                id={fieldId.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleChange(e);
                  setValues((prevValues) => ({
                    ...prevValues,
                    name: e.target.value,
                  }));
                }}
              />
              <ErrorMessage
                className={styles.error_message}
                name="name"
                component="span"
              />
            </label>
            <label className={styles.label} htmlFor={fieldId.email}>
              _email:
              <Field
                className={styles.field}
                type="email"
                name="email"
                id={fieldId.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleChange(e);
                  setValues((prevValues) => ({
                    ...prevValues,
                    email: e.target.value,
                  }));
                }}
              />
              <ErrorMessage
                className={styles.error_message}
                name="email"
                component="span"
              />
            </label>
            <label className={styles.label} htmlFor={fieldId.message}>
              _message:
              <Field
                className={styles.textarea}
                as="textarea"
                name="message"
                id={fieldId.message}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleChange(e);
                  setValues((prevValues) => ({
                    ...prevValues,
                    message: e.target.value,
                  }));
                }}
              />
              <ErrorMessage
                className={styles.error_message}
                name="message"
                component="span"
              />
            </label>
            <button className={styles.submit_btn} type="submit">
              submit-message
            </button>
          </Form>
        )}
      </Formik>
      <div className={clsx(styles.message, visible && styles.visible)}>
        <Message setVisible={() => setVisible(!visible)} error={error} />
      </div>
    </section>
  );
}
