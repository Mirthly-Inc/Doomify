const mongoose = require("mongoose");
const user = require("./schema");

console.log("Entered Database");

async function MongoConnect() {
  const res = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL);
}

MongoConnect();

export const test = async (email: string, password_hash: string) => {
  const inserter = new user({ username: email, password: password_hash });

  // const Already_exists = await User_model.find({
  //   username: email,
  // });

  // if (Already_exists) {
  //   return false;
  // }

  // const inserted_data = await newUser.create({

  // });
  inserter.save();
  console.log("inserted_data");
  return "inserted_data";
};

export const login = async (user_pass: string | null) => {
  const emailid = await user.find({
    password: user_pass,
  });
  return emailid;
};
