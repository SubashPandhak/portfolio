import React from "react";
import PagePadding from "./shared/PagePadding";
import Images from "./shared/Images";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import calculator from "../assets/project-profile/calculator.png";
import guessGame from "../assets/project-profile/guess-game.png";
import movieWatch from "../assets/project-profile/movie-watch.png";
import musicPlayer from "../assets/project-profile/music-player.png";
import textutils from "../assets/project-profile/textutils.png";

function Project() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <PagePadding>
        <div className="flex flex-col font-system">
          <h1 className="text-5xl font-semibold text-white mb-5">
            My Project.
          </h1>
          <div
            style={{ gridTemplateRows: "auto auto " }}
            className="grid grid-cols-2 gap-3 "
          >
            <a href="">
              <Images animation={"fade-down-right"} image={musicPlayer} />
            </a>

            <a href="">
              <Images animation={"fade-down-left"} image={calculator} />
            </a>
            <a className="row-span-2 col-span-2" href="">
              <div
                data-aos="flip-left"
                data-aos-delay="50"
                data-aos-duration="1000"
                className=" overflow-hidden  h-[300px] border-2 rounded-md hover:cursor-pointer"
              >
                <img
                  className="grid-double object-cover object-center h-full w-full hover:scale-110 transition-all duration-500 "
                  src={movieWatch}
                />
              </div>
            </a>
            <a href="">
              <Images animation={"fade-right"} image={guessGame} />
            </a>
            <a href="">
              <Images animation={"fade-left"} image={textutils} />
            </a>
          </div>
          <p className="text-white text-2xl p-3">Hope you like it !!</p>
        </div>
      </PagePadding>
    </>
  );
}

export default Project;
