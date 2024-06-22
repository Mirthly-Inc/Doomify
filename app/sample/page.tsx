// import { MongoConnect, test } from "../utils/database";

const page = async () => {
  const data = await fetch("http://localhost:3000/api", {
    headers: { Accept: "application/json", method: "GET" },
  });
  // const insert = await test();
  console.log(data);
  const ans = await data.json();
  console.log(ans);

  return (
    <div>
      <button>Click Me</button>
    </div>
  );
};

export default page;
