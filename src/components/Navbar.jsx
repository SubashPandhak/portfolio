import React from "react";
import { UserCircle, AirplaneTilt } from "@phosphor-icons/react";
import { PiBooksLight } from "react-icons/pi";
import { SiAboutdotme } from "react-icons/si";
import "../index.css";
import portfolio from "../assets/logo.png";
import Logo from "./shared/Logo";

function Navbar() {
  return (
    <>
      <div
        style={{ height: 15, width: "100vw", backgroundColor: "#edeae3" }}
      ></div>
      <nav className="flex space-x-20 justify-center items-center mt-8">
        <div className="flex items-center">
          <Logo title={"Home"} icon={<PiBooksLight size={70} />} />
          <Logo title={"About"} icon={<SiAboutdotme size={70} />} />
        </div>
        <div>
          <img src={portfolio} style={{ height: 150 }} />
        </div>
        <div className="flex items-center ">
          <Logo title={"Contact"} icon={<UserCircle size={70} />} />
          <Logo title={"CV"} icon={<AirplaneTilt size={70} />} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
