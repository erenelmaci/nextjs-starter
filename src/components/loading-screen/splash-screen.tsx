'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Logo from '../logo/logo';
// Start of Selection

type SplashScreenProps = React.HTMLAttributes<HTMLDivElement>;

export function SplashScreen({ className, ...props }: SplashScreenProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={cn(
        'absolute inset-0 z-[9998] flex items-center justify-center bg-background',
        className
      )}
      {...props}
    >
      <motion.div
        animate={{
          scale: [1, 0.9, 0.9, 1, 1],
          opacity: [1, 0.48, 0.48, 1, 1],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeatDelay: 1,
          repeat: Infinity,
        }}
      >
        <Logo isSingle={true} disabledLink className="h-16 w-16" />
      </motion.div>

      <motion.div
        animate={{
          scale: [1.6, 1, 1, 1.6, 1.6],
          rotate: [270, 0, 0, 270, 270],
          opacity: [0.25, 1, 1, 1, 0.25],
          borderRadius: ['25%', '25%', '50%', '50%', '25%'],
        }}
        transition={{ ease: 'linear', duration: 3.2, repeat: Infinity }}
        className="absolute h-[80px] w-[80px] border-[3px] border-primary/25"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 270, 270, 0, 0],
          opacity: [1, 0.25, 0.25, 0.25, 1],
          borderRadius: ['25%', '25%', '50%', '50%', '25%'],
        }}
        transition={{
          ease: 'linear',
          duration: 3.2,
          repeat: Infinity,
        }}
        className="absolute h-[100px] w-[100px] border-[8px] border-primary/25"
      />
    </div>
  );
}
