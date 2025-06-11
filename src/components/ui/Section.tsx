import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bgColor?: string; // e.g., 'bg-background', 'bg-card'
  noPadding?: boolean;
}

export function Section({ children, className, id, bgColor = 'bg-transparent', noPadding = false }: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn(
        bgColor,
        !noPadding && 'py-16 md:py-24',
        className
      )}
    >
      <div className={cn("container mx-auto px-4 sm:px-6 lg:px-8", noPadding && "px-0 sm:px-0 lg:px-0")}>
        {children}
      </div>
    </section>
  );
}
