
"use client";

import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

export function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder to prevent layout shift and hydration errors
    return <Button variant="ghost" size="icon" className="h-9 w-9" disabled aria-hidden="true" />;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="h-9 w-9" 
    >
      {theme === 'dark' ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all group-hover:text-accent" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all group-hover:text-accent" />
      )}
    </Button>
  );
}
