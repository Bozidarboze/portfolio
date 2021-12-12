import Projects from "./PROJECTS_DATA";

import Project from "../Project/Project.component";

const ProjectsList = () => {
  return Projects.map(({ id, ...otherProps }) => <Project key={id} {...otherProps} />);
};

export default ProjectsList;
