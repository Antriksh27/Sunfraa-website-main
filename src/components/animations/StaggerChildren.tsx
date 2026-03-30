'use client';

import React, { useRef } from 'react';
import { gsap } from '@/lib/gsap/gsap-config';
import { useGSAP } from '@/lib/gsap/useGSAP';
import { cn } from '@/lib/utils/cn';

interface StaggerChildrenProps {
  children: React.ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
  itemClassName?: string;
}

export default function StaggerChildren({
  children,
  stagger = 0.08,
  delay = 0,
  className = '',
  itemClassName = '',
}: StaggerChildrenProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const childrenArray = gsap.utils.toArray(containerRef.current.children);

    gsap.fromTo(
      childrenArray,
      {
        opacity: 0,
        y: 20,
        visibility: 'hidden',
      },
      {
        opacity: 1,
        y: 0,
        visibility: 'visible',
        stagger,
        duration: 0.8,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onStart: () => {
          childrenArray.forEach((child: any) => {
            child.style.willChange = 'transform, opacity';
          });
        },
        onComplete: () => {
          childrenArray.forEach((child: any) => {
            child.style.willChange = 'auto';
          });
        },
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={cn('gsap-stagger-container', className)}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, {
          // @ts-ignore
          className: cn('gsap-reveal', child.props.className, itemClassName),
        });
      })}
    </div>
  );
}
