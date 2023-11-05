import { motion } from 'framer-motion';
import { ChevronDoubleRightIcon } from '@heroicons/react/20/solid';
import { NextRouter, useRouter } from 'next/router';

interface Props {
  name: string;
  href: string;
}

export default function Button({ name, href }: Props): JSX.Element {
  const router: NextRouter = useRouter();

  return (
    <motion.div whileHover={{ x: 5 }} className="flex cursor-pointer group" onClick={(): Promise<boolean> => router.push(href)}>
      <ChevronDoubleRightIcon className="w-6 mr-2 text-emerald-900" />
      <div className="text-xl text-opacity-70 group-hover:text-opacity-100 transition text-white my-auto">
        {name}
      </div>
    </motion.div>
  );
}
