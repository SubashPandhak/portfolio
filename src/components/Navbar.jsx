import React from "react";
import "../index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Spin as Hamburger } from "hamburger-react";

function Navbar(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <a href={"#home"}>
        <div
          id="the-portfolio"
          className="font-system text-xl text-white font-bold tracking-wider flex flex-col items-center fixed z-10 top-3 left-4"
        >
          <p>P O R T</p>
          <p>F O L I O</p>
        </div>
      </a>
      <div
        className="z-10 fixed top-3 right-4"
        onClick={() => {
          props.setOpen((prev) => !prev);
          props.setIsNavClicked((prev) => !prev);
        }}
      >
        <Hamburger
          toggled={props.isOpen}
          size={30}
          direction="left"
          duration={0.7}
          rounded
          color="#fff"
        />
      </div>
    </>
  );
}

export default Navbar;
