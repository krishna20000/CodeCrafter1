
import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ContactForm } from '@/components/forms/ContactForm';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Mail, Phone, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - CodeCrafter Digital',
  description: 'Get in touch with CodeCrafter Digital for your web development needs. Reach out via form, email, or phone.',
};

const contactDetails = [
  { icon: Mail, text: 'contact@codecrafter.com', href: 'mailto:code.crafter.dev.hub@gmail.com' },
  { icon: Phone, text: '+91 9987258308', href: 'tel:+919987258308' },
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
              <div className="aspect-video bg-muted rounded-lg overflow-hidden border border-border shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482634.9432644145!2d72.60091457308284!3d19.08252232382148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map of Mumbai, Maharashtra"
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="mt-2 text-sm text-foreground/70">
                CodeCrafter Digital, Mumbai, Maharashtra, India
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}
