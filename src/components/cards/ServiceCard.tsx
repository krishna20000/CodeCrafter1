import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function ServiceCard({ icon: Icon, title, description, className }: ServiceCardProps) {
  return (
    <Card className={cn(
      "bg-card border-border/50 shadow-lg rounded-xl overflow-hidden",
      "transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/30",
      "group relative",
      className
    )}>
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <CardHeader className="relative z-10">
        <div className="mb-4 inline-block p-4 bg-primary/10 rounded-lg">
          <Icon className="w-10 h-10 stroke-primary" />
        </div>
        <CardTitle className="font-headline text-2xl text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <p className="text-foreground/80">{description}</p>
      </CardContent>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent rounded-xl transition-all duration-300 pointer-events-none opacity-0 group-hover:opacity-70"></div>
    </Card>
  );
}
