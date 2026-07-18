export interface GeminiModel {
  id: string;
  label: string;
  description: string;
}

export const GEMINI_MODELS: GeminiModel[] = [
  {
    id: 'google/gemini-2.5-flash',
    label: 'Gemini 2.5 Flash',
    description: 'Latest, fast and efficient (default)',
  },
  {
    id: 'google/gemini-2.5-pro',
    label: 'Gemini 2.5 Pro',
    description: 'Latest, most capable model',
  },
  {
    id: 'google/gemini-2.0-flash',
    label: 'Gemini 2.0 Flash',
    description: 'Stable, fast multimodal model',
  },
  {
    id: 'google/gemini-2.0-flash-lite',
    label: 'Gemini 2.0 Flash-Lite',
    description: 'Stable, cost-efficient and low latency',
  },
  {
    id: 'google/gemini-1.5-flash',
    label: 'Gemini 1.5 Flash',
    description: 'Stable, fast and versatile',
  },
  {
    id: 'google/gemini-1.5-pro',
    label: 'Gemini 1.5 Pro',
    description: 'Stable, advanced reasoning and long context',
  },
  {
    id: 'google/gemini-1.0-pro',
    label: 'Gemini 1.0 Pro',
    description: 'Stable, general purpose model',
  },
];

export const DEFAULT_GEMINI_MODEL = GEMINI_MODELS[0].id;
