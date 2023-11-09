import { motion } from 'framer-motion';

export default function Header(): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      className="text-white text-4xl font-bold text-opacity-80 text-center"
    >
      Contact me
    </motion.div>
  );
}
