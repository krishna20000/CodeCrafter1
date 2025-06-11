import { HeroSection } from '@/components/sections/home/HeroSection';
import { StatsBar } from '@/components/sections/home/StatsBar';
import { HowItWorksSection } from '@/components/sections/home/HowItWorksSection';
// Import other sections for home page if any

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <HowItWorksSection />
      {/* Add other sections like Featured Portfolio, Testimonials Snippet etc. */}
    </>
  );
}
