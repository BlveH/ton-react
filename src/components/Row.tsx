import React from "react";

const Row = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-y-1">{children}</div>;
};

export default Row;
