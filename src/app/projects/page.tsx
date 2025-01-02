"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import ModalMenu from "../components/ModalMenu/ModalMenu";
import styles from "./page.module.css";
import FiltersList from "./components/FiltersList/FiltersList";
import Footer from "../components/Footer/Footer";
import ProjectsList from "./components/ProjectsList/ProjectsList";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { fetchProjects } from "../redux/projects/operations";
import withReduxPersist from "../redux/withReduxPersist.js";
function Projects() {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <Header setVisible={setVisible} />
      <main>
        <h1 className={styles.title}>_projects</h1>
        <FiltersList />
        <ProjectsList />
      </main>
      <Footer />
      <ModalMenu setVisible={setVisible} visible={visible} />
    </div>
  );
}

export default withReduxPersist(Projects);
