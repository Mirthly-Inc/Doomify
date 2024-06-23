// import { MongoConnect, test } from "../utils/database";

const page = async () => {
  const data = await fetch("http://localhost:3000/api", {
    headers: { Accept: "application/json", method: "GET" },
  });

  return (
    <div>
      <button>Click Me</button>
    </div>
  );
};

export default page;
