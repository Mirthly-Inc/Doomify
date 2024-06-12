"use client";
const Login = () => {
  const handleoauthclick = () => {
    console.log("Clicked With O-auth");
  };
  return (
    <div className="border-2 border-white flex flex-col items-center lg:w-[75%] lg:mx-auto">
      <div className="flex items-center justify-center p-6 border-2 border-red-600 w-full">
        <div>Navbar will be here</div>
      </div>
      <div className="pt-20 flex items-center justify-center flex-col">
        <div className="lg:text-4xl text-3xl font-semibold pb-4">
          Login to Your Account
        </div>
        <div className="text-zinc-400 lg:text-lg text-md text-center">
          Learn Efficiently by competing with others using Generative AI.
        </div>
      </div>
      <div className="pt-10 lg:w-full md:w-full border-2 border-green-400 grid grid-cols-1 lg:grid-cols-7 md:grid-cols-7 w-[70%]">
        <div></div>
        <div className="col-span-2">
          <form className="flex flex-col gap-4">
            <input
              placeholder="Email Address"
              type="email"
              className="bg-zinc-900 outline-none p-2 text-white rounded-md placeholder:text-zinc-400"
            />
            <input
              placeholder="Password"
              type="password"
              className="bg-zinc-900 outline-none p-2 text-white rounded-md placeholder:text-zinc-400"
            />
            <button className="border-2 border-white p-2 rounded-md cursor-pointer text-sm flex justify-between items-center">
              <div>Login to Your Account</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center">\</div>
        <div className="col-span-2 flex flex-col gap-4">
          <button
            onClick={handleoauthclick}
            className="border-white border-2 p-2 rounded-md w-full"
          >
            Sign In With Google
          </button>
          <button
            onClick={handleoauthclick}
            className="border-white border-2 p-2 rounded-md w-full"
          >
            Sign In With Github
          </button>
          <button
            onClick={handleoauthclick}
            className="border-white border-2 p-2 rounded-md w-full"
          >
            Sign In With Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
