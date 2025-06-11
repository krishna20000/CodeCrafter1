"use client";

import { cn } from '@/lib/utils';
import { Button as ShadcnButton, type ButtonProps as ShadcnButtonProps } from '@/components/ui/button';
import Link from 'next/link';

interface GlowingButtonProps extends ShadcnButtonProps {
  children: React.ReactNode;
  pulse?: boolean;
  href?: string;
}

export function GlowingButton({ children, className, pulse = false, href, ...props }: GlowingButtonProps) {
  const buttonClasses = cn(
    'relative overflow-hidden rounded-lg bg-primary text-primary-foreground',
    'hover:bg-primary/90 transition-all duration-300',
    'focus:outline-none focus:ring-4 focus:ring-accent/50',
    'shadow-md hover:shadow-lg hover:shadow-accent/30',
    'px-8 py-3 text-lg font-semibold text-center',
    'before:absolute before:inset-0 before:bg-gradient-to-r before:from-accent/50 before:to-primary/50 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-30',
    pulse && 'animate-pulse-glow',
    className
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <ShadcnButton className={buttonClasses} {...props}>
      {children}
    </ShadcnButton>
  );
}
