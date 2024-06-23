import { NextResponse } from "next/server";
import { test } from "../utils/database";
var jwt = require("jsonwebtoken");

export async function POST(request: Request, response: NextResponse) {
  const req = await request.json();
  console.log(req.email);
  const signedJWT = jwt.sign(req.password, process.env.NEXT_PUBLIC_JWT_KEY);
  const retured_user = await test(req.email, signedJWT);
  if (retured_user) {
    response.cookies.set("authorization", retured_user);
  }
  return NextResponse.json({ message: retured_user });
}
