import React from "react";
import PagePadding from "./shared/PagePadding";
import Images from "./shared/Images";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../index.css";

import calculator from "../assets/project-profile/calculator.png";
import guessGame from "../assets/project-profile/guess-game.png";
import movieWatch from "../assets/project-profile/movie-watch.png";
import musicPlayer from "../assets/project-profile/music-player.png";
import textutils from "../assets/project-profile/textutils.png";
import line from "../assets/undis.png";

function Project() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <PagePadding>
        <div className="flex flex-col font-system">
          <h1 className="text-5xl md:text-7xl font-semibold text-white mb-7">
            My Project.
          </h1>
          <div className="flex justify-between items-center">
            <div className="flex flex-col font-system text-white text-4xl lg:text-5xl">
              <div className="w-fit cursor-pointer">
                <a
                  href="https://main--mero-music-player.netlify.app/"
                  target="_blank"
                >
                  <p className="pt-4 ">Mero Music-Player</p>
                  <img className="h-2 w-full " src={line} />
                </a>
              </div>
              <div className="w-fit">
                <a
                  href="https://main--mero-calculatorapp.netlify.app/"
                  target="_blank"
                >
                  <p className="pt-4 cursor-pointer">Mero Calculator</p>
                  <img className="h-2 w-full" src={line} />
                </a>
              </div>
              <div className="w-fit cursor-pointer">
                <a
                  href="https://main--mero-movies.netlify.app/"
                  target="_blank"
                >
                  <p className="pt-4 ">Mero Movies</p>
                  <img className="h-2 w-full" src={line} />
                </a>
              </div>
              <div className="w-fit cursor-pointer">
                <a
                  href="https://main--mero-guess-game.netlify.app/"
                  target="_blank"
                >
                  <p className="pt-4 ">Guess Game</p>
                  <img className="h-2 w-full" src={line} />
                </a>
              </div>
              <div className="w-fit cursor-pointer">
                <a
                  href="https://main--mero-textutils.netlify.app/"
                  target="_blank"
                >
                  <p className="pt-4 ">Mero TextUtils</p>
                  <img className="h-2 w-full" src={line} />
                </a>
              </div>
            </div>
            <div className="custom-bg md:h-[400px] lg:h-[500px] md:w-[450px] lg:w-[550px] rounded-tl-[100px]"></div>
          </div>
          {/* <Images animation={"fade-down-right"} image={musicPlayer} /> */}
          {/* <Images animation={"fade-down-left"} image={calculator} /> */}
          {/* <Images animation={"fade-down-left"} image={movieWatch} /> */}
          {/* <Images animation={"fade-right"} image={guessGame} /> */}
          {/* <Images animation={"fade-left"} image={textutils} /> */}
        </div>
      </PagePadding>
    </>
  );
}

export default Project;
