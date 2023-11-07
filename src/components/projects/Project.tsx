import { ChevronDoubleRightIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';
import { NextRouter, useRouter } from 'next/router';

interface Props {
  name: string;
  year: string;
  link: string;
  description: string;
}

export default function Project({ name, year, link, description }: Props): JSX.Element {
  const router: NextRouter = useRouter();

  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="flex cursor-pointer group"
      onClick={(): Promise<boolean> => router.push(link)}
    >
      <ChevronDoubleRightIcon className='w-6 mr-2 text-emerald-900'/>
      <div className="bg-black bg-opacity-20 p-4 rounded-lg">
        <div className="flex">
          <div className="text-xl text-opacity-70 group-hover:text-opacity-100 transition text-white">{name}</div>
          <div className="my-auto ml-2 text-sm text-emerald-800 group-hover:text-emerald-700 transition">[ {year} ]</div>
        </div>
        <div className="text-opacity-50 group-hover:text-opacity-80 transition text-white">{description}</div>
      </div>
    </motion.div>
  );
}
