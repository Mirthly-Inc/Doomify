const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function run(input: string) {
  console.log("Entered Ai Function");
  const prompt = `Give a detailed explanation for the word ${input}`;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log("Completed AI Block");
  return text;
}
