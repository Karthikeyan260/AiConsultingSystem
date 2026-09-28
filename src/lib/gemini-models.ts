export interface GeminiModel {
  id: string;
  label: string;
  description: string;
}

export const GEMINI_MODELS: GeminiModel[] = [
  {
    id: 'googleai/gemini-3.1-flash-lite',
    label: 'Gemini 3.1 Flash-Lite',
    description: 'Fastest and most cost-efficient (recommended)',
  },
  {
    id: 'googleai/gemini-3.8-flash',
    label: 'Gemini 3.8 Flash',
    description: 'Best price-performance for fast responses',
  },
  {
    id: 'googleai/gemini-3.1-pro-preview',
    label: 'Gemini 3.1 Pro',
    description: 'Advanced for complex tasks and reasoning',
  },
];

export const DEFAULT_GEMINI_MODEL = GEMINI_MODELS[0].id;
