"use client";

import { useState } from "react";
import { Run_Model } from "../utils/ai";
import { cn } from "@/lib/utils";
import { Output_Type } from "./types";
import Navbar from "@/components/Navbar";

const sample_streak = [true, false, false, true, false, true];
const Week = ["M", "T", "W", "T", "F", "S"];

const Homepage = () => {
  const [inputData, setInputData] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Output_Type>({
    example: "",
    recommend: [],
    explanation: "",
  });

  const response_fetcher = async (event: any, inputstring: string) => {
    event.preventDefault();
    setLoading(true);
    if (inputstring) {
      setInputData(inputstring);
    }
    const Resulted_data = await Run_Model(
      inputstring ? inputstring : inputData
    );
    const pared_data = JSON.parse(Resulted_data);
    setData(pared_data);
    setLoading(false);
  };

  const handleInputChange = (event: any) => {
    setInputData(event?.target.value);
  };

  return (
    <div className="lg:w-[65%] mx-autogap-4">
      <Navbar />
      <div className="flex gap-4">
        <div className="px-4 w-full">
          <div className="pt-6 text-lg pb-4">
            Enter the topic
            <form>
              <textarea
                className="w-full border-2 border-white rounded-md bg-transparent outline-none p-2 resize-none"
                onChange={handleInputChange}
                value={inputData}
              ></textarea>
              <div className="flex w-full justify-end pt-2">
                <button
                  className="border-2 bg-white text-black font-semibold font- border-white px-2 py-1 rounded-md"
                  onClick={response_fetcher}
                >
                  {loading ? (
                    <span className="cursor-not-allowed">
                      Getting Solutions
                    </span>
                  ) : (
                    <span>Get Solutions</span>
                  )}
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
          <div>
            <div className="text-xl font-semibold py-4">Calendar</div>
            <div className="grid grid-cols-6 gap-4">
              {sample_streak.map((value, index) => (
                <div
                  className={cn(
                    value === false
                      ? "bg-slate-900 border border-slate-200"
                      : "bg-green-500 text-black ",
                    "px-4 py-1 rounded-full flex items-center justify-center"
                  )}
                  key={index}
                >
                  {value === true ? (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-6 gap-4 pt-2 ">
              {Week.map((day, index) => (
                <div className="flex items-center justify-center" key={index}>
                  {day}
                </div>
              ))}
            </div>
          </div>
          {data.example.length !== 0 && (
            <div className="pt-4 text-xl font-semibold">
              <div className="pb-4">Recommended Topics</div>
              <div className="flex flex-col gap-2">
                <button
                  className="bg-white text-base text-black mb-2 px-2 py-1 rounded-md hover:bg-transparent border border-transparent hover:border hover:border-white hover:text-white hover:rounded-md"
                  onClick={(event) =>
                    response_fetcher(event, data.recommend[0])
                  }
                >
                  {data.recommend[0]}
                </button>
                <button
                  className="bg-white text-base text-black mb-2 px-2 py-1 rounded-md hover:bg-transparent border border-transparent hover:border hover:border-white hover:text-white hover:rounded-md"
                  onClick={(event) =>
                    response_fetcher(event, data.recommend[1])
                  }
                >
                  {data.recommend[1]}
                </button>
                <button
                  className="bg-white text-base text-black mb-2 px-2 py-1 rounded-md hover:bg-transparent border border-transparent hover:border hover:border-white hover:text-white hover:rounded-md"
                  onClick={(event) =>
                    response_fetcher(event, data.recommend[2])
                  }
                >
                  {data.recommend[2]}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
