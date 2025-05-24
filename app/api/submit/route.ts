import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("Received", req.body);
  return NextResponse.json({ message: "Data received" }, { status: 200 });
}
