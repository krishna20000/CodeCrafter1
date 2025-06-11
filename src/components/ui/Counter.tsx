"use client";

import { useEffect, useState, useRef } from 'react';

interface CounterProps {
  target: number;
  duration?: number; // in milliseconds
  className?: string;
  suffix?: string;
  prefix?: string;
}

export function Counter({ target, duration = 2000, className, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    if (start === end) return;

    const incrementTime = (duration / end);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration, isInView]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
