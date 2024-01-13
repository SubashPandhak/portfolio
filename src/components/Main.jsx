import React, { useState } from "react";
import SharedAbout from "./shared/SharedAbout";
import PagePadding from "./shared/PagePadding";
import Contact from "./Contact";
import profile from "../assets/me.jpg";
import Project from "./Project";
import NavbarOption from "./NavbarOption";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Education from "./Education";
import Skills from "./Skills";

function Main(props) {
  const [isOpen, setOpen] = useState(false);
  const [isNavClicked, setIsNavClicked] = useState(false);

  const handleNavClick = () => {
    setIsNavClicked((prev) => !prev);
    setOpen(false);
  };

  return (
    <>
      <div className="relative">
        <div>
          <NavbarOption
            isNavClicked={isNavClicked}
            handleNavClick={handleNavClick}
          />
        </div>
        <PagePadding id={props.id}>
          <div className="relative flex justify-center items-center flex-col">
            <div className="absolute z-[-1]">
              <Background />
            </div>
            <Navbar
              isOpen={isOpen}
              setOpen={setOpen}
              setIsNavClicked={setIsNavClicked}
            />
            <div className="profile flex flex-col items-center justify-center border-b-[5px black] animate-bounce ">
              <img
                className=" h-[350px] md:h-[500px] lg:h-[350px] w-[350px] md:w-[500px] lg:w-[350px] rounded-[50%] mb-3 object-cover"
                src={profile}
              />
              <div className="font-system font-semibold md:font-bold text-white flex justify-center items-center flex-col">
                <p className="text-7xl md:text-9xl lg:text-8xl mt-3">
                  Subash Limbu
                </p>
                <p className="text-2xl md:text-4xl lg:text-3xl mt-2">
                  Passionate Learner
                </p>
              </div>
            </div>
          </div>
        </PagePadding>
        <div id="about-us">
          <SharedAbout />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Project />
        </div>
      </div>
    </>
  );
}

export default Main;
