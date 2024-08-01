const Navbar = () => {
  return (
    <div className="flex justify-center items-center w-full  gap-4   p-3 ">
      <div className="px-3 py-1 font-semibold text-lg cursor-pointer border border-neutral-500 rounded-md hover:text-white bg-white text-black hover:bg-black">
        Home
      </div>
      <div className="px-3 py-1 font-semibold text-lg cursor-pointer border border-neutral-500 rounded-md hover:text-white bg-white text-black hover:bg-black">
        About
      </div>
      <div className="px-3 py-1 font-semibold text-lg cursor-pointer border border-neutral-500 rounded-md hover:text-white bg-white text-black hover:bg-black">
        Contact
      </div>
    </div>
  );
};

export default Navbar;
