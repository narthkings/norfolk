import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { configOptions } from '@/services/config';
import Loader from '@/components/loader';
import { Children } from '@/types';

interface Props {
  children: React.ReactNode;
}

export const AuthenticatedRoute: NextPage<Props> = ({ children }: Children) => {
  const router = useRouter();
  const token = configOptions();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token && typeof window !== 'undefined') {
      router.push('/');
    } else {
      setIsLoading(false);
    }
  }, [token, router]);

  if (isLoading) {
    return <Loader />; // show a loading component if you try to access a page without token
  }

  if (token || typeof window === 'undefined') {
    // Allow initial server-side rendering or when token exists
    return <>{children}</>;
  }

  return null;
};
