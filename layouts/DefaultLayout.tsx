import { FunctionComponent } from "react";

import Header from "@/components/blocks/header/Header";

import { ReactFN } from "types/global";

const DefaultLayout: FunctionComponent<ReactFN> = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-white overflow-x-auto overflow-y-hidden">
      <Header />
      <div className="bg-purple h-full w-full px-10 pt-5  overflow-x-auto">
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
