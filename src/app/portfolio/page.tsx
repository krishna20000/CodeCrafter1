
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
    liveLink: 'https://tulsiresin.com/',
    dataAiHint: 'ecommerce website',
  },
  {
    imageUrl: 'https://i.postimg.cc/NGnmyXRL/Screenshot-2025-06-12-121424.png',
    title: 'Consultancy Firm Website',
    industry: 'Business Consulting',
    description: 'Professional website for a consulting firm, showcasing services, expertise, and client testimonials.',
    liveLink: 'https://ssd-international.vercel.app',
    dataAiHint: 'consulting business',
  },
  {
    imageUrl: 'https://i.postimg.cc/J4PnDVfx/Screenshot-2025-06-12-121740.png',
    title: 'Modern Salon Booking Site',
    industry: 'Beauty & Wellness',
    description: 'An elegant website for a salon with online booking functionality and service galleries.',
    liveLink: 'https://pmcbarber.devfrend.com/',
    dataAiHint: 'salon spa',
  },
  {
    imageUrl: 'https://i.postimg.cc/kMj3WJ52/Screenshot-2025-06-12-122126.png',
    title: 'Adventure Travel Platform',
    industry: 'Tourism & Travel',
    description: 'A vibrant platform showcasing exciting travel destinations and local attractions. Discover your next adventure!',
    liveLink: 'https://yolomatrix-2.vercel.app/',
    dataAiHint: 'tourism travel',
  },
];

export default function PortfolioPage() {
  return (
    <Section id="portfolio" className="bg-background">
      <SectionTitle subtitle="Take a look at some of the stunning websites we've crafted for our clients.">
        Our Work
      </SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {portfolioItems.map((item, index) => (
          <AnimatedSection key={index} animationType="scaleUp" delay={`delay-${(index % 2) * 100}`}>
            <PortfolioCard {...item} />
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
