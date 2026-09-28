import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import {GEMINI_MODELS} from '@/lib/gemini-models';

export const ai = genkit({
  promptDir: './prompts',
  plugins: [
    googleAI({
      apiKey: process.env.GOOGLE_GENAI_API_KEY,
      models: GEMINI_MODELS.map((m) => m.id.replace(/^googleai\//, '')),
    }),
  ],
  model: 'googleai/gemini-3.1-flash-lite',
});
