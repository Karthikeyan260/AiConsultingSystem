export interface GeminiModel {
  id: string;
  label: string;
  description: string;
}

export const GEMINI_MODELS: GeminiModel[] = [
  // Gemini 3 Series (Latest)
  {
    id: 'gemini-3.5-flash',
    label: 'Gemini 3.5 Flash',
    description: 'Most intelligent model for sustained frontier performance (Stable)',
  },
  {
    id: 'gemini-3.1-flash-lite',
    label: 'Gemini 3.1 Flash-Lite',
    description: 'Frontier-class performance at low cost (Stable)',
  },
  {
    id: 'gemini-3.1-pro-preview',
    label: 'Gemini 3.1 Pro',
    description: 'Advanced intelligence and problem-solving (Preview)',
  },
  {
    id: 'gemini-3-flash-preview',
    label: 'Gemini 3 Flash',
    description: 'Frontier-class performance rivaling larger models (Preview)',
  },
  // Gemini 2.5 Series
  {
    id: 'gemini-2.5-flash',
    label: 'Gemini 2.5 Flash',
    description: 'Best price-performance for low-latency tasks (Stable)',
  },
  {
    id: 'gemini-2.5-flash-lite',
    label: 'Gemini 2.5 Flash-Lite',
    description: 'Fastest and most budget-friendly (Stable)',
  },
  {
    id: 'gemini-2.5-pro',
    label: 'Gemini 2.5 Pro',
    description: 'Most advanced for complex tasks and reasoning (Stable)',
  },
];

export const DEFAULT_GEMINI_MODEL = GEMINI_MODELS[0].id;
