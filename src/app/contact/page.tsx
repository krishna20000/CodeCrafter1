import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ContactForm } from '@/components/forms/ContactForm';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Image from 'next/image';
import { Mail, Phone, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - CodeCrafter Digital',
  description: 'Get in touch with CodeCrafter Digital for your web development needs. Reach out via form, email, or phone.',
};

const contactDetails = [
  { icon: Mail, text: 'contact@codecrafter.com', href: 'mailto:code.crafter.dev.hub@gmail.com' },
  { icon: Phone, text: '+91 123 456 7890', href: 'tel:+911234567890' },
  { icon: Clock, text: 'Mon - Fri: 9 AM - 6 PM' },
];

export default function ContactPage() {
  return (
    <Section id="contact" className="bg-background">
      <SectionTitle subtitle="We're here to help. Reach out to us with your project ideas or any questions.">
        Get In Touch
      </SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <AnimatedSection animationType="slideInUp">
          <ContactForm />
        </AnimatedSection>
        <AnimatedSection animationType="slideInUp" delay="delay-150">
          <div className="space-y-8">
            <div>
              <h3 className="font-headline text-2xl font-semibold text-primary mb-4">Contact Information</h3>
              <ul className="space-y-3">
                {contactDetails.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground/90">
                    <item.icon className="w-6 h-6 stroke-accent flex-shrink-0" />
                    {item.href ? (
                      <a href={item.href} className="hover:text-accent transition-colors">{item.text}</a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-2xl font-semibold text-primary mb-4">Our Location</h3>
              {/* Placeholder for Google Map Embed */}
              <div className="aspect-video bg-muted rounded-lg overflow-hidden border border-border shadow-md">
                <Image 
                  src="https://placehold.co/600x400.png?text=Google+Map+Placeholder" 
                  alt="Google Map Placeholder" 
                  width={600} 
                  height={400} 
                  className="w-full h-full object-cover"
                  data-ai-hint="map location" 
                />
              </div>
              <p className="mt-2 text-sm text-foreground/70">
                123 Tech Street, Innovation Hub, Bangalore, India
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}
