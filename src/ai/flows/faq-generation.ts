'use server';

/**
 * @fileOverview Generates a list of frequently asked questions (FAQ) for a website.
 *
 * - generateFaqList - A function that generates the FAQ list.
 * - GenerateFaqListInput - The input type for the generateFaqList function.
 * - GenerateFaqListOutput - The return type for the generateFaqList function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFaqListInputSchema = z.object({
  websiteType: z.string().describe('The type of website, e.g., e-commerce, blog, portfolio.'),
  businessType: z.string().describe('The type of business, e.g., digital agency, salon, consultant.'),
});
export type GenerateFaqListInput = z.infer<typeof GenerateFaqListInputSchema>;

const GenerateFaqListOutputSchema = z.object({
  faqList: z.array(
    z.object({
      question: z.string().describe('The FAQ question.'),
      answer: z.string().describe('The answer to the FAQ question.'),
    })
  ).describe('A list of frequently asked questions and their answers.'),
});
export type GenerateFaqListOutput = z.infer<typeof GenerateFaqListOutputSchema>;

export async function generateFaqList(input: GenerateFaqListInput): Promise<GenerateFaqListOutput> {
  return generateFaqListFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFaqListPrompt',
  input: {schema: GenerateFaqListInputSchema},
  output: {schema: GenerateFaqListOutputSchema},
  prompt: `You are an expert in generating FAQs for websites.

  Generate a list of frequently asked questions and their answers for a {{websiteType}} website for a {{businessType}} business.

  The output should be a JSON array of objects, where each object has a question and answer field.

  Example:
  [
    {
      "question": "What is your return policy?",
      "answer": "We offer a 30-day return policy."
    },
    {
      "question": "How do I contact support?",
      "answer": "You can contact support by email or phone."
    }
  ]
  `,
});

const generateFaqListFlow = ai.defineFlow(
  {
    name: 'generateFaqListFlow',
    inputSchema: GenerateFaqListInputSchema,
    outputSchema: GenerateFaqListOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
