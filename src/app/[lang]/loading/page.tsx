import Link from "next/link";

const Page = async () => {
  const loadingTest = await fetch("http://localhost:3000/api/loading-test");

  return (
    <>
      <div>Loading Complete</div>
      <Link href="/">홈으로 돌아가기</Link>
    </>
  );
};

export default Page;
