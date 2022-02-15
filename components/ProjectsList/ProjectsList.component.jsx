import Projects from "./PROJECTS_DATA";

import Project from "../Project/Project.component";

import styles from "./ProjectsList.module.scss";

const ProjectsList = ({ title }) => {
  const filteredProjects = Projects.filter((project) => {
    if (title === "Front End Projects" && project.app === "frontend") {
      return project;
    } else if (title === "Back End Projects" && project.app === "backend") {
      return project;
    }
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.projects}>
        {filteredProjects.map(({ id, ...otherProps }) => (
          <Project key={id} {...otherProps} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
