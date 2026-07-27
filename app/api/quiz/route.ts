import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(request: Request) {
  try {
    const { notes } = await request.json();

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: `
Generate exactly 5 multiple choice questions from these notes.

Format:

1. Question
A)
B)
C)
D)
Answer:

Notes:
${notes}
`,
    });

    return Response.json({
      quiz: response.text,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Failed to generate quiz." },
      { status: 500 }
    );
  }
}