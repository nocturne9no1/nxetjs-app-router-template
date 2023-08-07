"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <div>글로벌 에러는 레이아웃을 아예 덮어버림!</div>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
