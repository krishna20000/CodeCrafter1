
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
    photoUrl: 'https://images.unsplash.com/photo-1711188052690-e26f7fdced49?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote: 'CodeCrafter Digital transformed our online presence! The new website is fast, beautiful, and drives conversions. Highly recommended!',
    name: 'Priya Sharma',
    businessType: 'E-commerce Store Owner',
    rating: 5,
    dataAiHint: 'woman portrait',
  },
  {
    photoUrl: 'https://images.unsplash.com/photo-1659353222161-6c39fa853110?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote: 'The team was professional, creative, and delivered on time. Our new portfolio site looks amazing. Thank you, CodeCrafter!',
    name: 'Amit Singh',
    businessType: 'Freelance Photographer',
    rating: 5,
    dataAiHint: 'man portrait',
  },
  {
    photoUrl: 'https://i.postimg.cc/qMtqWZhv/test.jpg',
    quote: 'I was impressed by their attention to detail and understanding of my business needs. The ₹29/day offer is incredible value.',
    name: 'Rina Patel',
    businessType: 'Local Bakery Owner',
    rating: 4,
    dataAiHint: 'bakery shop',
  },
   {
    photoUrl: 'https://images.unsplash.com/photo-1681165558305-6e65c7e85d51?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    photoUrl: 'https://images.unsplash.com/photo-1659352789320-42b2d5de5599?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
