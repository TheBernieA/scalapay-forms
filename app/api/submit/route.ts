import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("Received", req.body);
  return NextResponse.json({ message: "Dati ricevuti" }, { status: 200 });
}
