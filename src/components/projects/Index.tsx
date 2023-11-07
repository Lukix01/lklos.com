import { motion } from 'framer-motion';
import projects from '../../../projects.json';
import Project from './Project';

const listAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

export default function Projects(): JSX.Element {
  return (
    <motion.div
      variants={listAnimation}
      initial="hidden"
      animate="visible"
      className="m-auto space-y-6"
    >
      {projects.map((project): JSX.Element => (
        <Project
          key={project.name}
          name={project.name}
          year={project.year}
          link={project.link}
          description={project.description}
        />
      ))}
    </motion.div>
  );
}
