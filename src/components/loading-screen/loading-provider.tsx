'use client';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { usePathname, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { startLoading, stopLoading } from '@/redux/slices/loading-slice';
import { SplashScreen } from './splash-screen';

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  useEffect(() => {
    dispatch(startLoading());

    // Simüle edilmiş sayfa yükleme gecikmesi
    const timer = setTimeout(() => {
      dispatch(stopLoading());
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname, searchParams, dispatch]);

  return (
    <>
      {children}
      {isLoading && <SplashScreen />}
    </>
  );
}
