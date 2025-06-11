import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ClipboardList, Rocket, BarChartBig } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const steps = [
  {
    icon: ClipboardList,
    title: '1. Pick Your Plan',
    description: 'Choose a plan that fits your needs. Transparent pricing, no hidden fees.',
  },
  {
    icon: Rocket,
    title: '2. We Design & Launch',
    description: 'Our experts craft a stunning, custom website tailored to your brand.',
  },
  {
    icon: BarChartBig,
    title: '3. Go Live & Scale',
    description: 'Launch your new site quickly and watch your business grow with our support.',
  },
];

export function HowItWorksSection() {
  return (
    <Section id="how-it-works" className="bg-card">
      <SectionTitle subtitle="Simple steps to get your dream website online.">
        How It Works
      </SectionTitle>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <AnimatedSection key={index} animationType="slideInUp" delay={`delay-${index * 150}`}>
            <Card className="text-center h-full bg-background border-border hover:border-primary transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/20">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                  <step.icon className="w-12 h-12 stroke-primary" />
                </div>
                <CardTitle className="font-headline text-2xl text-primary">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{step.description}</p>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
