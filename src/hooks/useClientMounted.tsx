// client component의 hydration error 를 방지하기 위한 hook
// isClient: true -> 해당 컴포넌트가 mounted 됐음
import { useState, useEffect } from "react";

const useClientMounted = () => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return { isClient };
};

export default useClientMounted;
