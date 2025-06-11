import Link from 'next/link';
import { Github, Linkedin, Twitter, Code2 } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

const socialIcons = [
  { href: 'https://github.com', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
];

export function Footer() {
  return (
    <footer className="bg-background/50 border-t border-border/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 text-2xl font-headline font-bold text-primary hover:text-accent transition-colors mb-4">
              <Code2 className="w-8 h-8 stroke-primary group-hover:stroke-accent transition-colors" />
              CodeCrafter
            </Link>
            <p className="text-sm text-foreground/70 text-center md:text-left">
              Crafting digital experiences that inspire.
            </p>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold text-primary mb-4 text-center md:text-left">Quick Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-foreground/80 hover:text-accent transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold text-primary mb-4 text-center md:text-left">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialIcons.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                    className="text-foreground/80 hover:text-accent transition-colors group">
                    <IconComponent className="w-6 h-6 stroke-current group-hover:filter group-hover:drop-shadow-[0_0_3px_hsl(var(--accent))] transition-all" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} CodeCrafter Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
