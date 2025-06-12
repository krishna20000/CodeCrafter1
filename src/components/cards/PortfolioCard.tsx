
"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface PortfolioCardProps {
  imageUrl: string;
  title: string;
  industry: string;
  description: string;
  liveLink?: string;
  dataAiHint?: string;
}

export function PortfolioCard({ imageUrl, title, industry, description, liveLink, dataAiHint }: PortfolioCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className={cn(
          "group relative overflow-hidden rounded-xl shadow-lg cursor-pointer border border-border/30",
          "transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/40"
        )}>
          <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={400}
            className="object-cover w-full h-64 transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:filter group-hover:brightness-110"
            data-ai-hint={dataAiHint}
          />
          {/* Gradient overlay that appears on hover */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            aria-hidden="true"
          />
          
          {/* Text content that slides up */}
          <CardContent className={cn(
            "absolute bottom-0 left-0 right-0 p-4", // Using p-4 for content area
            "transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100",
            "transition-all duration-400 ease-in-out delay-100" 
          )}>
            <h3 className="font-headline text-xl font-semibold text-primary-foreground group-hover:text-accent transition-colors duration-300">{title}</h3>
            <p className="text-sm text-primary-foreground/80 mt-1">{industry}</p>
          </CardContent>

          {/* Eye icon that fades in and scales */}
          <div className={cn(
            "absolute inset-0 flex items-center justify-center",
            "opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100",
            "transition-all duration-400 ease-in-out delay-200" 
          )}>
            <Eye className="w-14 h-14 text-accent/90 group-hover:text-accent group-hover:animate-pulse" />
          </div>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px] bg-card border-primary/50 p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="font-headline text-3xl text-primary">{title}</DialogTitle>
          <DialogDescription className="text-foreground/80">{industry}</DialogDescription>
        </DialogHeader>
        <div className="mt-4 p-6 pt-0">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border mb-4 shadow-inner">
            <Image
              src={imageUrl}
              alt={title}
              layout="fill"
              className="object-contain" 
              data-ai-hint={dataAiHint}
            />
          </div>
          <p className="text-foreground/90 text-base leading-relaxed">{description}</p>
          {liveLink && (
            <Button variant="link" asChild className="mt-6 text-accent hover:text-accent/80 px-0 text-base">
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                View Live Project <Eye className="ml-2 h-5 w-5" />
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

    