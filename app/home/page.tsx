const Homepage = () => {
  return (
    <div className="lg:w-[65%] mx-auto pt-3">
      <div className="pt-6 text-xl pb-4">Enter the topic</div>
      <textarea className="w-full border-2 border-white rounded-md bg-transparent outline-none p-2 resize-none"></textarea>
      <div className="flex w-full justify-end pt-2">
        <button className="border-2 bg-white text-black font-semibold font- border-white px-2 py-1 rounded-md">
          Get Solutions
        </button>
      </div>
    </div>
  );
};

export default Homepage;
