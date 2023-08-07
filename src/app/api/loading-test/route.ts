import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const delay = () => {
    return new Promise((resolve) => setTimeout(resolve, 3000));
  };

  await delay();
  return NextResponse.json("로딩 완료", {
    status: 200,
  });
}
