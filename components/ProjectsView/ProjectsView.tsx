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

const renderBackendProjects = (projects: ProjectType[]) => {
  return projects.map((project, idx) => project.type === 'backend' && renderProject(project, idx));
};

const renderFrontendProjects = (projects: ProjectType[]) => {
  return projects.map((project, idx) => project.type === 'frontend' && renderProject(project, idx));
};

const ProjectsView = ({ projects }: { projects: ProjectType[] }) => (
  <section className={styles.container}>
    <h2>Frontend Projects</h2>
    {renderFrontendProjects(projects)}
    <h2>Backend Projects</h2>
    {renderBackendProjects(projects)}
  </section>
);

export default ProjectsView;
