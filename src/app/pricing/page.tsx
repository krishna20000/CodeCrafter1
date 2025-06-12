
import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { PricingCard } from '@/components/cards/PricingCard';
import { ComparisonTable } from '@/components/sections/pricing/ComparisonTable';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Plans - CodeCrafter',
  description: 'Transparent and affordable pricing plans for website development. Choose the best plan for your business, starting at just ₹21/day.',
};

const pricingPlans = [
  {
    planName: 'Starter',
    priceYearly: '₹6999',
    priceDaily: '₹21',
    bestFor: 'Small Businesses / Portfolio',
    features: ['Custom 5 Page Design', 'Domain + Hosting (1 Year)', 'WhatsApp Integration', 'Basic SEO Setup', '5-Day Delivery'],
  },
  {
    planName: 'Professional',
    priceYearly: '₹14,999',
    priceDaily: '₹41',
    bestFor: 'Growing Brands / Blogs',
    features: ['Custom 10 Page Design', 'All Starter Features', 'Blog Section Included', 'Advanced SEO Setup', '7-Day Delivery'],
    isPopular: true,
  },
  {
    planName: 'Premium',
    priceYearly: '₹24,999',
    priceDaily: '₹69',
    bestFor: 'E-commerce & Full Setup',
    features: ['Custom 15+ Page Design', 'All Professional Features', 'eCommerce Functionality', 'Logo Design Included', 'Priority Support', '10-Day Delivery'],
  },
  {
    planName: 'Enterprise',
    customPriceText: 'Contact Us',
    bestFor: 'Large Scale & Custom Needs',
    features: [
      'Everything in Premium Plan', 
      'Dedicated Account Manager', 
      'Custom API Integrations', 
      'Scalable Cloud Infrastructure', 
      'Tailored SLA & Support'
    ],
    buttonText: "Contact Us",
    buttonHref: "/contact",
  },
];

export default function PricingPage() {
  return (
    <>
      <Section id="pricing-cards" className="bg-background">
        <SectionTitle subtitle="Only pay for what you need with our clear, competitive pricing.">
          Transparent Pricing
        </SectionTitle>
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <AnimatedSection key={plan.planName} animationType="slideInUp" delay={`delay-${index * 100}`}>
              <PricingCard {...plan} />
            </AnimatedSection>
          ))}
        </div>
      </Section>
      <Section id="comparison-table" className="bg-card">
        <SectionTitle subtitle="A detailed look at what each plan offers.">
          Feature Comparison
        </SectionTitle>
        <ComparisonTable />
      </Section>
    </>
  );
}
