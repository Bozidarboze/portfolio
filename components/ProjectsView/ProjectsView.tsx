import styles from './ProjectsView.module.css';
import Project from '../Project/Project';
import { ProjectType } from '../../types';

const renderProject = (project: ProjectType, idx: number) => {
  return (
    <Project
      key={idx}
      reverse={!(idx % 2)}
      title={project.title}
      description={project.description}
      imageSrc={project.imageSrc}
      liveDemoLink={project.liveDemoLink}
      sourceCodeLink={project.sourceCodeLink}
    />
  );
};

const renderMicroservices = (projects: ProjectType[]) => {
  return projects.map((project, idx) => project.type === 'backend' && renderProject(project, idx));
};

const renderProjects = (projects: ProjectType[]) => {
  return projects.map((project, idx) => project.type === 'frontend' && renderProject(project, idx));
};

const ProjectsView = ({ projects }: { projects: ProjectType[] }) => (
  <section className={styles.container}>
    <h2>Projects</h2>
    {renderProjects(projects)}
    <h2>Microservices</h2>
    {renderMicroservices(projects)}
  </section>
);

export default ProjectsView;
