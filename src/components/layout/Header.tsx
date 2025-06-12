
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggleButton } from '@/components/ui/ThemeToggleButton';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false); // Close mobile menu on route change
  }, [pathname]);

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 ml-[-20px] w-[calc(100%+20px)]">
          <Link href="/" className="flex items-center gap-2 text-2xl font-headline font-bold text-primary hover:text-accent transition-colors md:mr-6 lg:mr-8 xl:mr-12">
            <Code2 className="w-8 h-8 stroke-primary group-hover:stroke-accent transition-colors" />
            CodeCrafter
          </Link>

          <div className="flex items-center">
            <nav className="hidden md:flex md:space-x-3 lg:space-x-4 xl:space-x-6 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-medium hover:text-accent transition-colors pb-1",
                    pathname === item.href ? "text-accent border-b-2 border-accent" : "text-foreground/80"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            
            <div className="hidden md:block md:ml-3 lg:ml-4">
              <ThemeToggleButton />
            </div>

            <div className="md:hidden flex items-center ml-2">
              <ThemeToggleButton />
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="ml-2">
                {isMobileMenuOpen ? <X className="h-6 w-6 stroke-accent" /> : <Menu className="h-6 w-6 stroke-accent" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg py-4 animate-fade-in">
          <nav className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-medium hover:text-accent transition-colors text-lg",
                   pathname === item.href ? "text-accent" : "text-foreground/80"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
