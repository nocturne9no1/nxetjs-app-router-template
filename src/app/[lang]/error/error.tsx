"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // 에러 로그를 보여줍니다.
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // 세그먼트를 리렌더하여 리커버를 시도합니다
          () => reset() // 세그먼트 리렌더 메소드
        }
      >
        Try again
      </button>
      <div>
        <Link href="/">홈으로 돌아가기</Link>
      </div>
    </div>
  );
}
