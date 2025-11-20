export enum Category {
  WEALTH = '财富',
  HAPPINESS = '幸福',
  PHILOSOPHY = '哲学',
  AI_GENERATED = 'AI 洞见',
}

export interface Quote {
  id: string;
  text: string;
  category: Category;
  source?: string; // e.g., "The Almanack", "Twitter"
  tags?: string[];
}

export interface GeminiResponse {
  quote: string;
  context: string;
}