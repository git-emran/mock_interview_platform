import Image from "next/image";
import React from "react";

const Agents = () => {
  return (
    <div className="call-view">
      <div className="card-interviewer">
        <div className="avatar">
          <Image src="/ai-avatar.png" alt="vapi" height={54} width={65} className="object-cover"/>
        </div>
      </div>
    </div>
  );
};

export default Agents;
