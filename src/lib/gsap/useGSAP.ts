import { useGSAP as useGSAPBase } from '@gsap/react';
import { useEffect, useState } from 'react';
import { gsap } from './gsap-config';

export const useGSAP = (
  callback: (context: any, contextSafe?: any) => any,
  dependencies: any[] | { scope?: any; dependencies?: any[]; revertOnUpdate?: boolean } = []
) => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // Wrap the base useGSAP hook
  return useGSAPBase(
    (context, contextSafe) => {
      if (reducedMotion) return;
      return callback(context, contextSafe);
    },
    dependencies
  );
};
