'use server';
/**
 * @fileOverview Adapts the chatbot's response based on the domain and user need.
 *
 * - adaptResponseToNeed - A function that handles the adaptation of the chatbot response.
 * - AdaptResponseToNeedInput - The input type for the adaptResponseToNeed function.
 * - AdaptResponseToNeedOutput - The return type for the adaptResponseToNeed function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const AdaptResponseToNeedInputSchema = z.object({
  domain: z.enum(['Education', 'Healthcare', 'Finance', 'Retail']).describe('The domain of the user query.'),
  userNeed: z.string().describe('The specific need of the user.'),
  query: z.string().describe('The user query.'),
});
export type AdaptResponseToNeedInput = z.infer<typeof AdaptResponseToNeedInputSchema>;

const AdaptResponseToNeedOutputSchema = z.object({
  adaptedResponse: z.string().describe('The adapted response from the chatbot.'),
});
export type AdaptResponseToNeedOutput = z.infer<typeof AdaptResponseToNeedOutputSchema>;

export async function adaptResponseToNeed(input: AdaptResponseToNeedInput): Promise<AdaptResponseToNeedOutput> {
  return adaptResponseToNeedFlow(input);
}

const prompt = ai.definePrompt({
  name: 'adaptResponseToNeedPrompt',
  input: {
    schema: z.object({
      domain: z.enum(['Education', 'Healthcare', 'Finance', 'Retail']).describe('The domain of the user query.'),
      userNeed: z.string().describe('The specific need of the user.'),
      query: z.string().describe('The user query.'),
    }),
  },
  output: {
    schema: z.object({
      adaptedResponse: z.string().describe('The adapted response from the chatbot.'),
    }),
  },
  prompt: `You are a domain-specific chatbot that adapts its responses based on the domain and user need.

  Domain: {{{domain}}}
  User Need: {{{userNeed}}}
  User Query: {{{query}}}

  Please provide a relevant and helpful response based on the above information.
  `,
});

const adaptResponseToNeedFlow = ai.defineFlow<
  typeof AdaptResponseToNeedInputSchema,
  typeof AdaptResponseToNeedOutputSchema
>({
  name: 'adaptResponseToNeedFlow',
  inputSchema: AdaptResponseToNeedInputSchema,
  outputSchema: AdaptResponseToNeedOutputSchema,
}, async input => {
  const {output} = await prompt(input);
  return output!;
});

