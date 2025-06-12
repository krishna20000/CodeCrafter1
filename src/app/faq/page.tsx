"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { GlowingButton } from "@/components/ui/GlowingButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { generateFaqList, type GenerateFaqListInput, type GenerateFaqListOutput } from "@/ai/flows/faq-generation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import type { Metadata } from 'next';

// This metadata is static. For dynamic metadata, you'd use the generateMetadata function.
// export const metadata: Metadata = {
// title: 'FAQ - CodeCrafter',
// description: 'Find answers to frequently asked questions about CodeCrafter services and processes.',
// };


const faqSchema = z.object({
  websiteType: z.string().min(3, "Website type must be at least 3 characters"),
  businessType: z.string().min(3, "Business type must be at least 3 characters"),
});

type FaqFormValues = z.infer<typeof faqSchema>;

export default function FaqPage() {
  const [faqList, setFaqList] = useState<GenerateFaqListOutput["faqList"] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<FaqFormValues>({
    resolver: zodResolver(faqSchema),
  });

  const onSubmit: SubmitHandler<FaqFormValues> = async (data) => {
    setIsLoading(true);
    setError(null);
    setFaqList(null);
    try {
      const result = await generateFaqList(data);
      setFaqList(result.faqList);
    } catch (e) {
      console.error(e);
      setError("Failed to generate FAQs. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section id="faq" className="bg-background">
      <SectionTitle subtitle="Get answers to common questions about our services and process.">
        Frequently Asked Questions
      </SectionTitle>

      <AnimatedSection animationType="slideInUp" className="max-w-2xl mx-auto mb-12 p-6 bg-card border border-primary/30 rounded-xl shadow-lg">
        <h3 className="font-headline text-xl text-primary mb-4">Generate Custom FAQs</h3>
        <p className="text-foreground/80 mb-6">
          Enter your website and business type to generate a list of relevant FAQs.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label htmlFor="websiteType" className="text-foreground/80">Website Type (e.g., e-commerce, blog)</Label>
            <Input
              id="websiteType"
              {...register("websiteType")}
              className="mt-1 bg-background/50 border-border focus:border-primary focus:ring-primary"
              placeholder="e.g., Portfolio Site"
            />
            {errors.websiteType && <p className="text-sm text-destructive mt-1">{errors.websiteType.message}</p>}
          </div>
          <div>
            <Label htmlFor="businessType" className="text-foreground/80">Business Type (e.g., digital agency, salon)</Label>
            <Input
              id="businessType"
              {...register("businessType")}
              className="mt-1 bg-background/50 border-border focus:border-primary focus:ring-primary"
              placeholder="e.g., Local Cafe"
            />
            {errors.businessType && <p className="text-sm text-destructive mt-1">{errors.businessType.message}</p>}
          </div>
          <GlowingButton type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate FAQs
              </>
            )}
          </GlowingButton>
        </form>
      </AnimatedSection>

      {error && (
        <Alert variant="destructive" className="my-8 max-w-2xl mx-auto">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {faqList && faqList.length > 0 && (
        <AnimatedSection animationType="fadeIn" className="max-w-3xl mx-auto mt-12">
          <h3 className="font-headline text-2xl text-primary mb-6 text-center">Generated FAQs</h3>
          <Accordion type="single" collapsible className="w-full">
            {faqList.map((faqItem, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="bg-card border border-border/50 rounded-lg mb-3 shadow-md">
                <AccordionTrigger className="p-4 text-left font-medium text-foreground hover:text-accent transition-colors">
                  {faqItem.question}
                </AccordionTrigger>
                <AccordionContent className="p-4 pt-0 text-foreground/80">
                  {faqItem.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      )}
       {faqList === null && !isLoading && !error && (
        <div className="text-center text-foreground/70 mt-12">
          <p>Enter your details above to generate FAQs relevant to your business.</p>
        </div>
      )}
    </Section>
  );
}
