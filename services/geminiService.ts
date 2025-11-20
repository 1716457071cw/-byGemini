import { GoogleGenAI, Type } from "@google/genai";
import { Quote, Category } from '../types';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateNavalWisdom = async (topic: string): Promise<Quote> => {
  const model = 'gemini-2.5-flash';

  try {
    const prompt = `You are an expert on the philosophy of Naval Ravikant (as found in The Almanack of Naval Ravikant). 
    Generate a profound, aphoristic quote in Simplified Chinese (简体中文) that sounds exactly like something Naval would say about the topic: "${topic}".
    It should be concise, punchy, and insightful. 
    Also provide 2-3 short tags in Simplified Chinese relevant to the quote.
    
    Return valid JSON only.`;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            quoteText: { type: Type.STRING },
            tags: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["quoteText", "tags"]
        }
      }
    });

    const jsonText = response.text;
    if (!jsonText) throw new Error("Empty response from Gemini");

    const data = JSON.parse(jsonText);

    return {
      id: `ai-${Date.now()}`,
      text: data.quoteText,
      category: Category.AI_GENERATED,
      source: "Gemini (模拟纳瓦尔)",
      tags: data.tags
    };

  } catch (error) {
    console.error("Error generating wisdom:", error);
    throw new Error("无法连接纳瓦尔的智慧。请尝试其他话题。");
  }
};