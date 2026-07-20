export interface GeminiModel {
  id: string;
  label: string;
  description: string;
}

export const GEMINI_MODELS: GeminiModel[] = [
  // Gemini 3.1 Series - Latest (Recommended)
  {
    id: 'gemini-3.1-flash-lite',
    label: 'Gemini 3.1 Flash-Lite',
    description: 'High-frequency, cost-efficient multimodal tasks (recommended)',
  },
  {
    id: 'gemini-3.1-pro',
    label: 'Gemini 3.1 Pro',
    description: 'Advanced reasoning and complex problem-solving',
  },
  // Gemini 2.5 Series - Stable
  {
    id: 'gemini-2.5-pro',
    label: 'Gemini 2.5 Pro',
    description: 'Advanced for complex tasks and reasoning',
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
  // Gemini 2.0 Series
  {
    id: 'gemini-2.0-flash',
    label: 'Gemini 2.0 Flash',
    description: 'Fast multimodal model with broad capabilities',
  },
];

export const DEFAULT_GEMINI_MODEL = GEMINI_MODELS[0].id;
