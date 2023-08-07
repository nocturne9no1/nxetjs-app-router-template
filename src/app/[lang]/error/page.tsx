const Page = async () => {
  const error = await fetch("http://localhost/api/error-test");

  return <div>에러 해결!</div>;
};

export default Page;
