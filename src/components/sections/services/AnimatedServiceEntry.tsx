
"use client";

import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimatedServiceEntryProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function AnimatedServiceEntry({ icon: Icon, title, description }: AnimatedServiceEntryProps) {
  return (
    <div className="group relative py-8 border-b border-border/30 last:border-b-0 overflow-hidden">
      <div className="flex items-center gap-6">
        <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg transition-all duration-300 ease-out group-hover:bg-accent/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/30">
          <Icon className="w-10 h-10 stroke-primary transition-colors duration-300 ease-out group-hover:stroke-accent" />
        </div>
        <h3 className="font-headline text-2xl font-semibold text-primary transition-colors duration-300 ease-out group-hover:text-accent">
          {title}
        </h3>
      </div>
      <div className={cn(
        "mt-4 pl-[calc(40px+24px+12px)]", // Icon size (w-10=40px) + gap-6 (24px) + approximate padding alignment for text
        "transition-all duration-500 ease-out max-h-0 opacity-0",
        "group-hover:max-h-96 group-hover:opacity-100 group-hover:mt-5" // Ensure margin appears on hover
      )}>
        <p className="text-foreground/80 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 h-0.5 bg-accent w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
    </div>
  );
}
