import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export function SectionTitle({ children, subtitle, className, align = 'center' }: SectionTitleProps) {
  return (
    <div className={cn(
      'mb-12 md:mb-16',
      {
        'text-left': align === 'left',
        'text-center': align === 'center',
        'text-right': align === 'right',
      },
      className
    )}>
      <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight">
        {children}
      </h2>
      {subtitle && <p className="mt-3 sm:mt-4 text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
