"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const featuresData = [
  { feature: 'Custom Design', starter: true, professional: true, premium: true },
  { feature: 'Pages Included', starter: '5', professional: '10', premium: '15+' },
  { feature: 'WhatsApp + GMap', starter: true, professional: true, premium: true },
  { feature: 'Domain + Hosting', starter: true, professional: true, premium: 'Premium Included' },
  { feature: 'Blog Section', starter: false, professional: true, premium: true },
  { feature: 'SEO', starter: false, professional: 'Basic', premium: 'Advanced' },
  { feature: 'Logo Design', starter: false, professional: false, premium: true },
  { feature: 'eCommerce Setup', starter: false, professional: false, premium: true },
  { feature: 'Delivery Time', starter: '5 Days', professional: '7 Days', premium: '10 Days' },
  { feature: 'Support', starter: true, professional: true, premium: 'Priority' },
];

function FeatureCell({ value }: { value: string | boolean }) {
  if (typeof value === 'boolean') {
    return value ? <Check className="w-5 h-5 mx-auto stroke-green-500" /> : <X className="w-5 h-5 mx-auto stroke-red-500" />;
  }
  return <span className="text-sm">{value}</span>;
}

export function ComparisonTable() {
  return (
    <AnimatedSection animationType="fadeIn">
      <div className="overflow-x-auto bg-card p-6 rounded-xl shadow-lg border border-border/50">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-card">
              <TableHead className="font-headline text-left text-lg text-primary w-1/4">Feature</TableHead>
              <TableHead className="font-headline text-center text-lg text-primary w-1/4">Starter</TableHead>
              <TableHead className="font-headline text-center text-lg text-primary w-1/4">Professional</TableHead>
              <TableHead className="font-headline text-center text-lg text-primary w-1/4">Premium</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {featuresData.map((item, index) => (
              <TableRow 
                key={index} 
                className={cn(
                  "border-b border-border/30 hover:bg-primary/5 transition-colors duration-200",
                  index % 2 === 0 ? "bg-background/30" : "bg-card"
                )}
              >
                <TableCell className="font-medium text-foreground/90 py-4">{item.feature}</TableCell>
                <TableCell className="text-center py-4"><FeatureCell value={item.starter} /></TableCell>
                <TableCell className="text-center py-4"><FeatureCell value={item.professional} /></TableCell>
                <TableCell className="text-center py-4"><FeatureCell value={item.premium} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </AnimatedSection>
  );
}
