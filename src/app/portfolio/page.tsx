
import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { PortfolioCard } from '@/components/cards/PortfolioCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work - CodeCrafter',
  description: 'Browse through our portfolio of successfully completed web development projects for various industries.',
};

const portfolioItems = [
  {
    imageUrl: 'https://i.postimg.cc/brrx7Hkf/Screenshot-2025-06-12-121034.png',
    title: 'E-commerce Platform',
    industry: 'Online Retail',
    description: 'A fully-featured e-commerce platform with custom design, payment gateway integration, and product management.',
    liveLink: '#',
    dataAiHint: 'ecommerce website',
  },
  {
    imageUrl: 'https://placehold.co/600x400.png',
    title: 'Consultancy Firm Website',
    industry: 'Business Consulting',
    description: 'Professional website for a consulting firm, showcasing services, expertise, and client testimonials.',
    dataAiHint: 'consulting business',
  },
  {
    imageUrl: 'https://placehold.co/600x400.png',
    title: 'Modern Salon Booking Site',
    industry: 'Beauty & Wellness',
    description: 'An elegant website for a salon with online booking functionality and service galleries.',
    liveLink: '#',
    dataAiHint: 'salon spa',
  },
  {
    imageUrl: 'https://placehold.co/600x400.png',
    title: 'Real Estate Listings Portal',
    industry: 'Real Estate',
    description: 'A dynamic portal for real estate listings with advanced search filters and agent profiles.',
    dataAiHint: 'real estate',
  },
  {
    imageUrl: 'https://placehold.co/600x400.png',
    title: 'Restaurant Online Menu',
    industry: 'Food & Beverage',
    description: 'Interactive online menu and reservation system for a local restaurant.',
    dataAiHint: 'restaurant menu',
  },
  {
    imageUrl: 'https://placehold.co/600x400.png',
    title: 'Artist Portfolio Showcase',
    industry: 'Arts & Culture',
    description: 'Visually striking portfolio website for a digital artist to showcase their work.',
    liveLink: '#',
    dataAiHint: 'artist portfolio',
  },
];

export default function PortfolioPage() {
  return (
    <Section id="portfolio" className="bg-background">
      <SectionTitle subtitle="Take a look at some of the stunning websites we've crafted for our clients.">
        Our Work
      </SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <AnimatedSection key={index} animationType="scaleUp" delay={`delay-${(index % 3) * 100}`}>
            <PortfolioCard {...item} />
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
