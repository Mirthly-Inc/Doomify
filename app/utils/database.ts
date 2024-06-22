// const mongoose = require("mongoose");

// console.log("Entered Database");

// export async function MongoConnect() {
//   const res = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL);
//   return res;
// }

// const newUser = mongoose.model("user_datas", {
//   username: String,
//   password: String,
// });

// export const test = async () => {
//   const Already_exists = await newUser.findOne({
//     username: "testuser02@gmail.com",
//   });
//   if (Already_exists) {
//     console.log("Not Possible");
//     return false;
//   }
//   const inserted_data = await newUser.create({
//     username: "testuser02@gmail.com",
//     password: "testuser02",
//   });
//   return inserted_data;
// };
