import { NextResponse } from "next/server";
import { login, test } from "../utils/database";

var jwt = require("jsonwebtoken");

export async function POST(request: Request, response: NextResponse) {
  const req = await request.json();
  console.log("first");
  const loggedin = req.headers?.authorization
    ? req.headers.authorization
    : null;

  console.log(loggedin);

  if (loggedin) {
    const auth_token = request.headers.get("authorization");
    const user_hash_db = await login(auth_token);
    if (user_hash_db) {
      return NextResponse.json({ message: "All Success" });
    } else {
      return NextResponse.json({ message: "You are legit user" });
    }
  } else {
    const signedJWT = jwt.sign(req.password, process.env.NEXT_PUBLIC_JWT_KEY);
    const retured_user = await test(req.email, signedJWT);
    if (retured_user) {
      console.log(retured_user);
    }
    // console.log(signedJWT);
    // console.log(req.email);
    // console.log(req.password);
    return NextResponse.json({ message: "signedJWT" });
  }
}
