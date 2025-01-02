import { useSelector } from "react-redux";
import { selectProjects } from "@/app/redux/projects/selectors";
import { selectIsLoading } from "@/app/redux/projects/selectors";
import Loader from "@/app/components/Loader/Loader";
import ProjectsListItem from "../ProjectsListItem/ProjectsListItem";
import { Project } from "@/app/redux/projects/slice";
import styles from "./ProjectsList.module.css";
import { selectError } from "@/app/redux/projects/selectors";

export default function ProjectsList() {
  const projects = useSelector(selectProjects);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{"//"} projects</h2>
      {isLoading && <Loader />}
      {error ? (
        <p>{"/ :("} Sorry, I couldn`t find any projects</p>
      ) : (
        <ul className={styles.list}>
          {projects.map((item: Project, index: number) => {
            return (
              <ProjectsListItem key={index} project={item}></ProjectsListItem>
            );
          })}
        </ul>
      )}
    </section>
  );
}
