import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import {DEFAULT_GEMINI_MODEL} from '@/lib/gemini-models';

const modelName = DEFAULT_GEMINI_MODEL.replace(/^googleai\//, '');

export const ai = genkit({
  promptDir: './prompts',
  plugins: [
    googleAI({
      apiKey: process.env.GOOGLE_GENAI_API_KEY,
      models: [modelName],
    }),
  ],
  model: DEFAULT_GEMINI_MODEL,
});
