import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log("first");
  return NextResponse.json({ message: "Hello World" });
}
