"use client";

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fadeIn' | 'slideInUp' | 'scaleUp';
  delay?: string; // e.g., 'delay-100', 'delay-200'
  once?: boolean; // Trigger animation only once
}

export function AnimatedSection({ 
  children, 
  className, 
  animationType = 'fadeIn', 
  delay = '',
  once = true 
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && sectionRef.current) {
              observer.unobserve(sectionRef.current);
            }
          } else if (!once) {
            setIsVisible(false); // Re-trigger if not `once`
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [once]);

  const animationClasses = {
    fadeIn: isVisible ? 'animate-fade-in opacity-100' : 'opacity-0',
    slideInUp: isVisible ? 'animate-slide-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
    scaleUp: isVisible ? 'animate-in zoom-in-95 opacity-100 scale-100' : 'opacity-0 scale-90',
  };

  return (
    <div
      ref={sectionRef}
      className={cn(
        'transition-all duration-700 ease-out',
        animationClasses[animationType],
        delay,
        className
      )}
    >
      {children}
    </div>
  );
}
