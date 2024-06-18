"use client";

import { act, useState } from "react";
import { Run_Model } from "../utils/ai";
import { Streak } from "@/components/Streak";

const Homepage = () => {
  const [data, setData] = useState("");
  const response_fetcher = async (event) => {
    event.preventDefault();
    const Resulted_data = await Run_Model("LLM");
    console.log(Resulted_data);
    setData(Resulted_data.explanation);
  };
  return (
    <div className="lg:w-[65%] mx-auto pt-3">
      <div className="pt-6 text-xl pb-4">Enter the topic</div>
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
      <div className="w-fit">
        <Streak />
      </div>
    </div>
  );
};

export default Homepage;
