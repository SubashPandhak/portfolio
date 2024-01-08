import React from "react";
import { UserCircle } from "@phosphor-icons/react";
import { PiBooksLight } from "react-icons/pi";
import { SiAboutdotme } from "react-icons/si";
import { PiCertificateLight } from "react-icons/pi";
import "../index.css";
import Logo from "./shared/Logo";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import portfolio from "../assets/portfolio.png";
// import { Link } from "react-router-dom";

function Navbar() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <nav
        style={{
          background: "rgba(255, 255, 255, 0.06)",

          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: " blur(3.9px)",
        }}
        className=" flex space-x-20 justify-between items-center px-4 py-2  bg-[rgba(245, 40, 145, 0.77)] fixed top-0 min-w-full z-10"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-delay="50"
        data-aos-duration="500"
      >
        <a href={"#home"}>
          <div
            id="the-portfolio"
            className="font-system text-5xl text-white ml-4 "
          >
            <p>THE</p>
            <p>PORTFOLIO</p>
          </div>
        </a>
        <div className=" flex items-center">
          <a href={"#home"}>
            <Logo
              title={"Home"}
              icon={<PiBooksLight color="white" size={40} />}
            />
          </a>
          <a href={"#about-us"}>
            <Logo
              title={"About"}
              icon={<SiAboutdotme color="white" size={40} />}
            />
          </a>
          <a href="#contact">
            <Logo
              title={"Contact"}
              icon={<UserCircle color="white" size={40} />}
            />
          </a>
          <a href="#projects">
            <Logo
              title={"CV"}
              icon={<PiCertificateLight color="white" size={40} />}
            />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
