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
      className="overflow-y-auto m-auto h-2/3 space-y-6 p-4 w-80 sm:w-[34rem]"
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
