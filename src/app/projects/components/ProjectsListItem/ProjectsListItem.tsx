import Image from "next/image";
import { Project } from "@/app/redux/projects/slice";
import styles from "./ProjectsListItem.module.css";
import clsx from "clsx";

interface ProjectsListItemProps {
  project: Project;
}

export default function ProjectsListItem({ project }: ProjectsListItemProps) {
  const projectName =
    project?.title.split("//")[1]?.trim().replace(/\s+/g, "-") ||
    project?.title;
  const projectPrefix = project?.title.split("//")[0]?.trim() || project?.title;
  return (
    <li className={styles.li}>
      <h3 className={styles.title}>
        <span className={styles.title_span}>{projectPrefix}</span> {"/"}{" "}
        {projectName}
      </h3>
      <div className={styles.container}>
        <Image
          className={styles.img}
          src={project.image}
          alt={projectName}
          width="2000"
          height="2000"
          priority
        />
        <ul className={styles.icon_ul}>
          {project.technology.map((item, index) => (
            <li
              className={clsx(
                styles.icon_li,
                (item === "css" && styles.css) ||
                  (item === "html" && styles.html) ||
                  (item === "javascript" && styles.js) ||
                  // (item === "typescript" && styles.ts) ||
                  (item === "react" && styles.react) ||
                  (item === "node" && styles.node) ||
                  ""
              )}
              key={index}
            >
              <svg className={styles.icon} width={20} height={20}>
                <use href={`/images/icons.svg#icon-${item}`}></use>
              </svg>
            </li>
          ))}
        </ul>
        <p className={styles.description}>{project.description}</p>
        <a className={styles.link} href={project.link} target="_blank">
          view-project
        </a>
      </div>
    </li>
  );
}
