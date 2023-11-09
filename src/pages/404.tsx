import { NextRouter, useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Error404(): void {
  const router: NextRouter = useRouter();

  useEffect((): void => {
    router.push('/');
  });
}

