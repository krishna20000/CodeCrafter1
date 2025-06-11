
"use client";

import { GlowingButton } from '@/components/ui/GlowingButton';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [boxes, setBoxes] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const numBoxes = 15; 
    const generatedBoxes = Array.from({ length: numBoxes }).map((_, i) => {
      const size = Math.random() * 40 + 10; 
      const duration = Math.random() * 15 + 10; 
      const delay = Math.random() * 15;     
      const left = Math.random() * 100;    
      const boxColorClass = Math.random() > 0.5 ? 'bg-primary/30' : 'bg-accent/20';

      return (
        <div
          key={`box-${i}`}
          className={`absolute animate-fall rounded-md ${boxColorClass}`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            top: '-100px', 
            zIndex: 1,     
          }}
        />
      );
    });
    setBoxes(generatedBoxes);
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-hero-gradient py-20 md:py-32">
      {boxes}
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm z-[2]"></div>
      <AnimatedSection className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10" animationType="slideInUp">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
          <span className="block text-foreground">Launch Your Website for</span>
          <span className="block text-primary mt-2 sm:mt-3">Just <span className="text-accent">₹29</span>/day</span>
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-lg sm:text-xl md:text-2xl text-foreground/80">
          Custom design, hosting, domain & 1-year support.
          We build stunning, high-performance websites that elevate your brand.
        </p>
        <div className="mt-10">
          <GlowingButton href="/contact" pulse size="lg">
            Get Started
          </GlowingButton>
        </div>
      </AnimatedSection>
    </div>
  );
}
