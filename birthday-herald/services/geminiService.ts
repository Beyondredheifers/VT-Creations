
import { GoogleGenAI } from "@google/genai";
import { Gender } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBirthdayWish = async (name: string, gender: Gender): Promise<string> => {
  const genderPronoun = gender === Gender.Male ? 'He' : 'She';

  const prompt = `
    You are a caring and warm member of a close-knit church community. 
    Your task is to write a heartfelt and encouraging birthday message for a fellow church member named ${name}.
    ${genderPronoun} is a cherished part of our spiritual family.

    The message must meet these criteria:
    1.  Be personal, warm, and celebratory in tone.
    2.  Include one, and only one, powerful and uplifting promise verse from the King James Version (KJV) of the Bible.
    3.  The verse should be relevant to a birthday, encouragement, or God's promises.
    4.  Structure the output clearly with the message first, and then the Bible verse in a distinct paragraph. For example: "Happy Birthday... [main message] ... \n\n[Bible Verse] - [Reference]".
    5.  Do not include any introductory or concluding remarks like "Here is the message:". Just provide the birthday wish itself.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating birthday wish:", error);
    return "We're sending you all our love and prayers on your special day. May God's blessings be upon you today and always.";
  }
};
