import { Code2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-background z-[100] flex flex-col items-center justify-center animate-fade-in">
      <div className="relative">
        <Code2 className="w-24 h-24 text-primary animate-pulse" />
        <div className="absolute inset-0 rounded-full border-4 border-accent/50 animate-ping opacity-50"></div>
      </div>
      <p className="mt-4 text-xl font-headline text-foreground/80">Loading CodeCrafter...</p>
    </div>
  );
}
