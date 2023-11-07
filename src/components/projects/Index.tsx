import projects from '../../../projects.json';
import Project from './Project';

export default function Projects(): JSX.Element {
  return (
    <div className="m-auto space-y-6">
      {projects.map((project): JSX.Element => (
        <Project
          key={project.name}
          name={project.name}
          year={project.year}
          link={project.link}
          description={project.description}
        />
      ))}
    </div>
  );
}
