import Agents from "@/components/Agents";
import React from "react";

const Page = () => {
  return (
    <>
      <h3>Interview Generation</h3>
      <Agents userName="you" userId="user1" type="generate" />
    </>
  );
};

export default Page;
