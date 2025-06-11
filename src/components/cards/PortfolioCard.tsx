"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";


interface PortfolioCardProps {
  imageUrl: string;
  title: string;
  industry: string;
  description: string; // For lightbox
  liveLink?: string; // For lightbox
  dataAiHint?: string;
}

export function PortfolioCard({ imageUrl, title, industry, description, liveLink, dataAiHint }: PortfolioCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className={cn(
          "group relative overflow-hidden rounded-lg shadow-lg cursor-pointer",
          "transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/30"
        )}>
          <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={400}
            className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
            data-ai-hint={dataAiHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <CardContent className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 backdrop-blur-sm">
            <h3 className="font-headline text-xl font-semibold text-primary-foreground group-hover:text-accent transition-colors">{title}</h3>
            <p className="text-sm text-primary-foreground/80">{industry}</p>
          </CardContent>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Eye className="w-12 h-12 text-accent" />
          </div>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-card border-primary/50">
        <DialogHeader>
          <DialogTitle className="font-headline text-3xl text-primary">{title}</DialogTitle>
          <DialogDescription className="text-foreground/80">{industry}</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={400}
            className="object-contain w-full rounded-md max-h-[300px]"
            data-ai-hint={dataAiHint}
          />
          <p className="mt-4 text-foreground/90">{description}</p>
          {liveLink && (
            <Button variant="link" asChild className="mt-4 text-accent hover:text-accent/80 px-0">
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                View Live Project <Eye className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
