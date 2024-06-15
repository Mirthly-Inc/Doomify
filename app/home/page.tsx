// "use server";

import { test_function } from "../utils/actions";

const Homepage = async () => {
  let display_data = "";
  const call_data = await test_function().then((data) => {
    console.log(data);
    display_data = data;
  });

  return (
    <div className="lg:w-[65%] mx-auto pt-3">
      <div className="pt-6 text-xl pb-4">Enter the topic</div>
      <textarea className="w-full border-2 border-white rounded-md bg-transparent outline-none p-2 resize-none"></textarea>
      <div className="flex w-full justify-end pt-2">
        <button
          className="border-2 bg-white text-black font-semibold font- border-white px-2 py-1 rounded-md"
          formAction={call_data}
        >
          Get Solutions
        </button>
      </div>
      <div>{display_data.title}</div>
    </div>
  );
};

export default Homepage;
