import { type NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    console.log('Request received');
  const userAgent = req.headers.get("user-agent") || "";
  const prefersDark = userAgent.includes("dark");

  // Add theme to request headers
  const response = NextResponse.next();
  response.headers.set("x-initial-theme", prefersDark ? "dark" : "light");
  console.log({ prefersDark });
  return response;
}
