import { z } from "zod";
const { GoogleGenerativeAI } = require("@google/generative-ai");
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

// const genAI = new GoogleGenerativeAI();

// const model = genAI.getGenerativeModel({ model: "" });

const model = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-flash",
  maxOutputTokens: 2048,
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
});

const Output_Parser = z.object({
  recommended_topics: z
    .array(
      z
        .string()
        .describe(
          "Give additional 3 topics based on the given topic to follow up with"
        )
    )
    .length(3),
  explanation: z.string().describe("explain the given topic"),
  examples: z.string().describe("Give a suitable example for the given topic"),
});

// const structuredLlm = model.withStructuredOutput(joke);

export async function Run_Model(input: String) {
  console.log("Entered Ai Function");
  const prompt = `Give a detailed explanation for the word ${input}`;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const structuredLlm = model.withStructuredOutput(Output_Parser, {
    name: "Output_Parser",
  });
  console.log(structuredLlm);
  const response = await structuredLlm.invoke("llm");
  console.log("Completed AI Block");
  console.log(response);
  return text;
}
