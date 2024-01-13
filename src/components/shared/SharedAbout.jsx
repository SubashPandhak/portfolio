import React from "react";
import PagePadding from "./PagePadding";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import about from "../../assets/about.png";
import line from "../../assets/undis.png";

function SharedAbout() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <PagePadding>
        <div className="flex flex-col justify-between items-start pb-1 text-white">
          <div
            className="flex flex-col font-system"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <h1 className=" text-5xl md:text-7xl mb-7 font-semibold">About.</h1>
            <p className="text-4xl md:text-5xl mb-6 ">
              I'm a student and a passionate learner of web development.
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="flex font-system justify-between place-items-end md:items-center lg:items-center"
          >
            <p className="text-lg md:text-3xl w-[50%]">
              Since few years, I've enjoyed building and solving complex
              problems into a web app. When I'm not designing and developing,
              you'll find me sketching or singing.
            </p>
            <img
              className="h-[230px] md:h-[340px] lg:h-[360px] w-[250px] md:w-[350px]  object-fill"
              src={about}
            />
          </div>
          <img className="h-4 w-full pt-1" src={line} />
        </div>
      </PagePadding>
    </>
  );
}

export default SharedAbout;
