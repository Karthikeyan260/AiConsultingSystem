export interface GeminiModel {
  id: string;
  label: string;
  description: string;
}

export const GEMINI_MODELS: GeminiModel[] = [
  // Gemini 2.5 Series - Latest Stable
  {
    id: 'gemini-2.5-pro',
    label: 'Gemini 2.5 Pro',
    description: 'Most advanced for complex tasks and reasoning (default)',
  },
  {
    id: 'gemini-2.5-flash',
    label: 'Gemini 2.5 Flash',
    description: 'Best price-performance for fast responses',
  },
  {
    id: 'gemini-2.5-flash-lite',
    label: 'Gemini 2.5 Flash-Lite',
    description: 'Fastest and most cost-efficient',
  },
  // Gemini 2.0 Series - Stable
  {
    id: 'gemini-2.0-flash',
    label: 'Gemini 2.0 Flash',
    description: 'Fast multimodal model with broad capabilities',
  },
  // Gemini 1.5 Series - Legacy
  {
    id: 'gemini-1.5-pro',
    label: 'Gemini 1.5 Pro',
    description: 'Advanced reasoning with 2M token context',
  },
  {
    id: 'gemini-1.5-flash',
    label: 'Gemini 1.5 Flash',
    description: 'Fast responses with large context window',
  },
];

export const DEFAULT_GEMINI_MODEL = GEMINI_MODELS[0].id;
