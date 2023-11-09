import { motion } from 'framer-motion';
import Button from './Button';

const buttonsAnimation = {
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

export default function Buttons(): JSX.Element {
  return (
    <motion.div
      variants={buttonsAnimation}
      initial="hidden"
      animate="visible"
      className='mt-4 flex space-x-4'
    >
      <Button name="Github" href="https://github.com/Lukix01"/>
      <Button name="Twitter" href="https://twitter.com/lklos01"/>
      <Button name="Email" href="mailto:e@lklos.com"/>
    </motion.div>
  );
}
