import { NextResponse } from "next/server";
import { login, test } from "../utils/database";
var jwt = require("jsonwebtoken");

export async function POST(request: Request, response: NextResponse) {
  const req = await request.json();
  if (localStorage.getItem("authorization")) {
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
      response.cookies.set("authorization", retured_user);
    }
    return NextResponse.json({ message: retured_user });
  }
}
