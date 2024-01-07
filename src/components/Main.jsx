import React from "react";
import SharedAbout from "./shared/SharedAbout";
import PagePadding from "./shared/PagePadding";
import BackNnav from "./shared/BackNnav";
import Contact from "./Contact";

function Main(props) {
  return (
    <>
      <PagePadding id={props.id}>
        <div className="relative flex justify-center items-center flex-col">
          <BackNnav />
          <div className="profile flex flex-col items-center justify-center border-b-[5px black] animate-bounce ">
            <img
              className=" h-[350px] w-[350px] rounded-[50%] mb-3 object-cover"
              src="src\assets\about.jpg"
            />
            <div className="font-system font-semibold text-white flex justify-center items-center flex-col">
              <p className="text-8xl font-extrabold mt-3">Subash Limbu</p>
              <p className="text-2xl mt-2">Frontend Developer and Designer</p>
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
    </>
  );
}

export default Main;
