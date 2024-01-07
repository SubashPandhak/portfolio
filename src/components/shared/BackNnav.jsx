import React from "react";
import Navbar from "../Navbar";
import Background from "../Background";

function BackNnav() {
  return (
    <>
      <div className="absolute z-[-1]">
        <Background />
      </div>
      <Navbar />
    </>
  );
}

export default BackNnav;
