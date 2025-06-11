import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Testimonials - CodeCrafter Digital',
  description: 'Read what our satisfied clients have to say about their experience with CodeCrafter Digital.',
};

const testimonials = [
  {
    photoUrl: 'https://placehold.co/100x100.png',
    quote: 'CodeCrafter Digital transformed our online presence! The new website is fast, beautiful, and drives conversions. Highly recommended!',
    name: 'Priya Sharma',
    businessType: 'E-commerce Store Owner',
    rating: 5,
    dataAiHint: 'woman portrait',
  },
  {
    photoUrl: 'https://placehold.co/100x100.png',
    quote: 'The team was professional, creative, and delivered on time. Our new portfolio site looks amazing. Thank you, CodeCrafter!',
    name: 'Amit Singh',
    businessType: 'Freelance Photographer',
    rating: 5,
    dataAiHint: 'man portrait',
  },
  {
    quote: 'I was impressed by their attention to detail and understanding of my business needs. The ₹21/day offer is incredible value.',
    name: 'Rina Patel',
    businessType: 'Local Bakery Owner',
    rating: 4,
    dataAiHint: 'bakery shop',
  },
   {
    photoUrl: 'https://placehold.co/100x100.png',
    quote: 'Exceptional service from start to finish. The WhatsApp integration and SEO optimization have already made a big difference.',
    name: 'Vikram Reddy',
    businessType: 'Tech Startup Founder',
    rating: 5,
    dataAiHint: 'man tech',
  },
  {
    quote: 'Finally, a web agency that understands small businesses. The process was smooth, and the result exceeded my expectations.',
    name: 'Sunita Rao',
    businessType: 'Yoga Instructor',
    rating: 5,
    dataAiHint: 'yoga studio',
  },
  {
    photoUrl: 'https://placehold.co/100x100.png',
    quote: 'The best investment I made for my new consultancy. The website is professional and easy to manage.',
    name: 'Rajesh Kumar',
    businessType: 'Business Consultant',
    rating: 4,
    dataAiHint: 'consultant office',
  },
];

export default function TestimonialsPage() {
  return (
    <Section id="testimonials" className="bg-background">
      <SectionTitle subtitle="Hear from our happy clients and see why they trust CodeCrafter Digital.">
        Client Testimonials
      </SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <AnimatedSection key={index} animationType="scaleUp" delay={`delay-${(index % 3) * 100}`}>
            <TestimonialCard {...testimonial} />
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
