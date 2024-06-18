const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function Run_Model(input: string) {
  console.log("Entered AI Function");
  const prompt = `Give a detailed explanation for the word ${input}. Your output should be parsed in the following format in below json datatype. Dont add JSON in front. Have all the response inside ${` `} symbol. Mention bold text inside ** ** fromat only. 
  {explanation:"Explanation of the given topic",
    recommend:"Recommend 3 topics related to it. must be maximum of three words per recommendation. Do not include ** **",
    example:"Explain with example"
  }
  `;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}
