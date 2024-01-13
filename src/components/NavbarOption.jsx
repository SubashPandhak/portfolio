import React from "react";
import Logo from "./shared/Logo";
import "../index.css";

function NavbarOption(props) {
  return (
    <>
      <div
        style={{
          background: "rgba(255, 255, 255, 0.06)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: " blur(3.9px)",
        }}
        className={`${
          props.isNavClicked ? "navclip-active" : "navclip"
        } navclip h-[80px] md:h-[120px] lg:h-[130px] pt-[12px] px-4 w-full z-10 fixed top-0 `}
      >
        <div className="flex justify-center items-center ml-4 md:ml-6 mt-2 md:mt-3">
          <div onClick={props.handleNavClick}>
            <a href={"#home"}>
              <Logo title={"Home"} />
            </a>
          </div>
          <div onClick={props.handleNavClick}>
            <a href={"#about-us"}>
              <Logo title={"About"} />
            </a>
          </div>
          <div onClick={props.handleNavClick}>
            <a href="#contact">
              <Logo title={"Contact"} />
            </a>
          </div>
          <div onClick={props.handleNavClick}>
            <a href="#education">
              <Logo title={"Education"} />
            </a>
          </div>
          <div onClick={props.handleNavClick}>
            <a href="#skills">
              <Logo title={"Skills"} />
            </a>
          </div>
          <div onClick={props.handleNavClick}>
            <a href="#projects">
              <Logo title={"Projects"} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarOption;
