import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      second page layout
      {children}
    </div>
  );
};

export default Layout;
