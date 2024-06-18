"use client";

import { useState } from "react";
import { Run_Model } from "../utils/ai";
import { Streak } from "@/components/Streak";
import { cn } from "@/lib/utils";
import { Output_Type } from "./types";

const Homepage = () => {
  const [data, setData] = useState<Output_Type>({
    example: "",
    recommend: [],
    explanation: "",
  });
  const response_fetcher = async (event, inputstring: string) => {
    event.preventDefault();
    const Resulted_data = await Run_Model(inputstring ? inputstring : "LLM");
    const pared_data = JSON.parse(Resulted_data);
    setData(pared_data);
  };
  return (
    <div className="lg:w-[65%] mx-auto pt-3 flex gap-4">
      <div className="px-4 w-full">
        <div className="pt-6 text-lg pb-4">
          Enter the topic
          <form>
            <textarea className="w-full border-2 border-white rounded-md bg-transparent outline-none p-2 resize-none"></textarea>
            <div className="flex w-full justify-end pt-2">
              <button
                className="border-2 bg-white text-black font-semibold font- border-white px-2 py-1 rounded-md"
                onClick={response_fetcher}
              >
                Get Solutions
              </button>
            </div>
          </form>
        </div>
        {data.example.length !== 0 && (
          <div className="flex flex-col">
            <div className="text-xl font-semibold pb-4">Explanation</div>
            <div className="border-white border pl-4 py-4 rounded-md">
              {data.explanation
                .split("**")
                .map((text: string, index: number) => (
                  <span
                    key={index}
                    className={cn(
                      "font-normal",
                      index % 2 == 0 ? "" : "font-bold"
                    )}
                  >
                    {text}
                  </span>
                ))}
            </div>
            <div className="text-xl font-semibold py-4">Examples</div>
            <div className="border-white border pl-4 py-4 rounded-md">
              {data.example.split("**").map((text: string, index: number) => (
                <span
                  key={index}
                  className={cn(
                    "font-normal",
                    index % 2 == 0 ? "" : "font-bold"
                  )}
                >
                  {text}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div>
        <Streak />
        {data.example.length !== 0 && (
          <div className="pt-4 text-xl font-semibold">
            <div className="pb-4">Recommended Topics</div>
            <div className="flex flex-col gap-2">
              <button
                className="bg-white text-base text-black mb-2 px-2 py-1 rounded-md hover:bg-transparent border border-transparent hover:border hover:border-white hover:text-white hover:rounded-md"
                onClick={(event) => response_fetcher(event, data.recommend[0])}
              >
                {data.recommend[0]}
              </button>
              <button
                className="bg-white text-base text-black mb-2 px-2 py-1 rounded-md hover:bg-transparent border border-transparent hover:border hover:border-white hover:text-white hover:rounded-md"
                onClick={(event) => response_fetcher(event, data.recommend[1])}
              >
                {data.recommend[1]}
              </button>
              <button
                className="bg-white text-base text-black mb-2 px-2 py-1 rounded-md hover:bg-transparent border border-transparent hover:border hover:border-white hover:text-white hover:rounded-md"
                onClick={(event) => response_fetcher(event, data.recommend[2])}
              >
                {data.recommend[2]}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
