import { Zap, Briefcase, MessageSquare, Star } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Counter } from '@/components/ui/Counter';

const stats = [
  { icon: Briefcase, value: 100, label: 'Projects Delivered', suffix: '+' },
  { icon: Zap, value: 5, label: 'Day Turnaround', suffix: '-Day' },
  { icon: MessageSquare, value: 24, label: 'Support Hours', suffix: '/7' },
  { icon: Star, value: 5, label: 'Star Client Ratings', suffix: '-Star' },
];

export function StatsBar() {
  return (
    <Section className="bg-background" id="stats">
      <AnimatedSection animationType="slideInUp">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 bg-card rounded-xl shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
              <stat.icon className="w-12 h-12 mx-auto mb-4 stroke-accent" strokeWidth={1.5} />
              <div className="font-headline text-4xl md:text-5xl font-bold text-primary">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </Section>
  );
}
