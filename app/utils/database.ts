const mongoose = require("mongoose");

console.log("Entered Database");

export async function MongoConnect() {
  const res = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL);
  return res;
}

const Schema = mongoose.Schema;
const newUser = new Schema({
  username: String,
  password: String,
});

export const test = async (email: string, password_hash: string) => {
  const Already_exists = await newUser.find({
    username: email,
  });

  if (Already_exists) {
    return false;
  }

  const inserted_data = await newUser.create({
    username: email,
    password: password_hash,
  });

  return inserted_data;
};

export const login = async (user_pass: string | null) => {
  const emailid = await newUser.find({
    password: user_pass,
  });
  return emailid;
};
