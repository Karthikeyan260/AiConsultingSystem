export interface GeminiModel {
  id: string;
  label: string;
  description: string;
}

export const GEMINI_MODELS: GeminiModel[] = [
  // Gemini 2.5 Series - Stable & Working (Recommended)
  {
    id: 'gemini-2.5-flash',
    label: 'Gemini 2.5 Flash',
    description: 'Best price-performance for fast responses (recommended)',
  },
  {
    id: 'gemini-2.5-pro',
    label: 'Gemini 2.5 Pro',
    description: 'Advanced for complex tasks and reasoning',
  },
  {
    id: 'gemini-2.5-flash-lite',
    label: 'Gemini 2.5 Flash-Lite',
    description: 'Fastest and most cost-efficient',
  },
];

export const DEFAULT_GEMINI_MODEL = GEMINI_MODELS[0].id;
