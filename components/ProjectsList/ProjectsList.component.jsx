import Projects from "./PROJECTS_DATA";

import Project from "../Project/Project.component";

import styles from "./ProjectsList.module.scss";

const ProjectsList = () => {
  return (
    <div className={styles.container}>
      {Projects.map(({ id, ...otherProps }) => (
        <Project key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default ProjectsList;
