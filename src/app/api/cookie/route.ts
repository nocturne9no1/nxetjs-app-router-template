import { cookies } from "next/headers";

export async function GET(request: Request) {
  return new Response("Hello, Next.js!", {
    status: 200,
    headers: { "Set-Cookie": `i18next=${"ko"}` },
  });
}
