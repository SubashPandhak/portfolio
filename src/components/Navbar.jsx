import React from "react";
import "../index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Navbar(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const genericHamburgerLine = `h-[4px] w-8 my-[2px] md:h-[7px] lg:h-[6px] md:w-16 lg:w-14 md:my-[4px] rounded-full bg-black transition ease transform duration-300`;

  return (
    <>
      <a href={"#home"}>
        <div
          id="the-portfolio"
          className="font-system text-xl md:text-5xl text-white font-bold tracking-wider flex flex-col items-center fixed z-10 top-3 lg:top-5 left-4 lg:left-6"
        >
          <p>P O R T</p>
          <p>F O L I O</p>
        </div>
      </a>

      <div
        className="flex flex-col cursor-pointer justify-center items-center group z-10 fixed  top-6 right-4 md:right-5 md:top-7 lg:right-7 lg:top-9"
        onClick={() => {
          props.setOpen((prev) => !prev);
          props.setIsNavClicked((prev) => !prev);
        }}
      >
        <div
          className={`${genericHamburgerLine} ${
            props.isOpen
              ? "rotate-45 md:rotate-45 translate-y-2 md:translate-y-3.5 opacity-50 group-hover:opacity-100"
              : "opacity-100"
          } bg-white`}
        />
        <div
          className={`${genericHamburgerLine} ${
            props.isOpen ? "opacity-0" : "opacity-100"
          } bg-white`}
        />
        <div
          className={`${genericHamburgerLine} ${
            props.isOpen
              ? "-rotate-45 md:-rotate-45 -translate-y-2 md:-translate-y-3.5 opacity-50 group-hover:opacity-100"
              : "opacity-100"
          }  bg-white`}
        />
      </div>
    </>
  );
}

export default Navbar;
