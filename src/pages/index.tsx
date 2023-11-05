import { motion } from 'framer-motion';
import Home from '../components/home/Index';

export default function Index(): JSX.Element {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex h-screen"
    >
      <Home />
    </motion.div>
  );
}
