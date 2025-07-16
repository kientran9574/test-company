import { mockProducts } from "@/data/product";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(mockProducts);
}
