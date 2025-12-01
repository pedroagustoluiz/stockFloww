import type { ReactNode } from "react";

interface PageProps {
  children?: ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <div className="bg-white-base h-screen w-full p-10 flex flex-col  gap-8 mt-5">
      {children}
    </div>
  );
};

export default Page;
