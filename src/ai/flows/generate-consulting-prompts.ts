// src/ai/flows/generate-consulting-prompts.ts
'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating example consulting prompts based on the selected domain.
 *
 * - generateConsultingPrompts - A function that generates example consulting prompts.
 * - GenerateConsultingPromptsInput - The input type for the generateConsultingPrompts function.
 * - GenerateConsultingPromptsOutput - The return type for the generateConsultingPrompts function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const GenerateConsultingPromptsInputSchema = z.object({
  domain: z.enum(['Education', 'Healthcare', 'Finance', 'Retail']).describe('The selected domain for generating prompts.'),
});
export type GenerateConsultingPromptsInput = z.infer<typeof GenerateConsultingPromptsInputSchema>;

const GenerateConsultingPromptsOutputSchema = z.object({
  prompts: z.array(z.string()).describe('An array of example consulting prompts for the selected domain.'),
});
export type GenerateConsultingPromptsOutput = z.infer<typeof GenerateConsultingPromptsOutputSchema>;

export async function generateConsultingPrompts(input: GenerateConsultingPromptsInput): Promise<GenerateConsultingPromptsOutput> {
  return generateConsultingPromptsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateConsultingPromptsPrompt',
  input: {
    schema: z.object({
      domain: z.enum(['Education', 'Healthcare', 'Finance', 'Retail']).describe('The selected domain for generating prompts.'),
    }),
  },
  output: {
    schema: z.object({
      prompts: z.array(z.string()).describe('An array of example consulting prompts for the selected domain.'),
    }),
  },
  prompt: `You are an expert consultant in the field of {{{domain}}}. Generate 3 example prompts that a user might ask to get advice from you. Each prompt should be less than 20 words.

Example Prompts:
`,
});

const generateConsultingPromptsFlow = ai.defineFlow<
  typeof GenerateConsultingPromptsInputSchema,
  typeof GenerateConsultingPromptsOutputSchema
>({
  name: 'generateConsultingPromptsFlow',
  inputSchema: GenerateConsultingPromptsInputSchema,
  outputSchema: GenerateConsultingPromptsOutputSchema,
},
async input => {
  const {output} = await prompt(input);
  return output!;
}
);
