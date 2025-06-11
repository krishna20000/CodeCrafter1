import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { GlowingButton } from '@/components/ui/GlowingButton';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  planName: string;
  priceYearly: string;
  priceDaily: string;
  bestFor: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
  buttonHref?: string;
}

export function PricingCard({
  planName,
  priceYearly,
  priceDaily,
  bestFor,
  features,
  isPopular = false,
  buttonText = "Choose Plan",
  buttonHref = "/contact"
}: PricingCardProps) {
  return (
    <Card className={cn(
      "flex flex-col h-full bg-card border rounded-xl shadow-lg transition-all duration-300 ease-out transform hover:scale-105",
      isPopular ? "border-primary shadow-primary/30 hover:shadow-primary/40" : "border-border/50 hover:shadow-accent/20"
    )}>
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
          Most Popular
        </div>
      )}
      <CardHeader className="pt-10 text-center">
        <CardTitle className="font-headline text-3xl text-primary">{planName}</CardTitle>
        <CardDescription className="text-foreground/70 mt-1">{bestFor}</CardDescription>
        <div className="mt-6">
          <span className="font-headline text-5xl font-bold text-accent">{priceYearly}</span>
          <span className="text-foreground/70">/year</span>
        </div>
        <p className="text-sm text-foreground/60 mt-1">or {priceDaily}/day</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3 mt-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 stroke-green-500 shrink-0" />
              <span className="text-foreground/90">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto pb-8">
        <GlowingButton href={buttonHref} className="w-full" pulse={isPopular}>
          {buttonText}
        </GlowingButton>
      </CardFooter>
    </Card>
  );
}
