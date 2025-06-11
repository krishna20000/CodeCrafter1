
import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { AnimatedServiceEntry } from '@/components/sections/services/AnimatedServiceEntry';
import { Palette, Smartphone, Search, PenTool, Globe, MessageCircle, ShoppingCart, Wrench } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - CodeCrafter Digital',
  description: 'Explore the range of web development services offered by CodeCrafter Digital, including custom design, mobile responsiveness, SEO, and e-commerce solutions.',
};

const services = [
  {
    icon: Palette,
    title: 'Custom Design',
    description: 'Unique, tailor-made website designs. No templates, just pure creativity reflecting your brand.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Responsive',
    description: 'Flawless performance and stunning looks on all devices: desktops, tablets, and smartphones.',
  },
  {
    icon: Globe,
    title: 'Free Domain + Hosting (1 Year)',
    description: 'Get started hassle-free with a free domain name and one year of reliable hosting.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your online visibility with our foundational and advanced SEO strategies.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp & Map Integration',
    description: 'Connect with customers easily via WhatsApp and guide them with Google Maps integration.',
  },
  {
    icon: PenTool,
    title: 'Blog + Contact Forms',
    description: 'Engage your audience with a built-in blog and capture leads with custom contact forms.',
  },
  {
    icon: ShoppingCart,
    title: 'eCommerce Solutions',
    description: 'Powerful e-commerce setup for online stores (available in Premium plan).',
  },
  {
    icon: Wrench,
    title: '1-Year Support & Maintenance',
    description: 'Peace of mind with one year of technical support and website maintenance.',
  },
];

export default function ServicesPage() {
  return (
    <Section id="services" className="bg-background">
      <SectionTitle subtitle="We offer a comprehensive suite of services to build and scale your online presence.">
        Our Services
      </SectionTitle>
      <div className="max-w-3xl mx-auto space-y-6">
        {services.map((service, index) => (
          <AnimatedSection key={index} animationType="slideInUp" delay={`delay-${index * 100}`}>
            <AnimatedServiceEntry
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
