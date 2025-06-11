
"use client";

import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function FloatingCallButton() {
  const phoneNumber = "+919987258308"; 
  const callLink = `tel:${phoneNumber}`;

  return (
    <Link
      href={callLink}
      className={cn(
        "fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary text-primary-foreground shadow-xl",
        "hover:bg-primary/90 transition-all duration-300 animate-pulse-glow",
        "focus:outline-none focus:ring-4 focus:ring-primary/50"
      )}
      aria-label="Call Us"
      style={{ '--accent': '278 100% 50%' } as React.CSSProperties} // Primary color HSL for glow
    >
      <Phone className="w-6 h-6" />
    </Link>
  );
}
