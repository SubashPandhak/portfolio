import React from "react";
import PagePadding from "./shared/PagePadding";
import Images from "./shared/Images";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../index.css";
import { useState } from "react";

import calculator from "../assets/project-profile/calculator.png";
import guessGame from "../assets/project-profile/guess-game.png";
import movieWatch from "../assets/project-profile/movie-watch.png";
import musicPlayer from "../assets/project-profile/music-player.png";
import textutils from "../assets/project-profile/textutils.png";
import line from "../assets/undis.png";
import ImageOnHover from "./ImageOnHover";

function Project() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [image, setImage] = useState(null);

  return (
    <>
      <PagePadding>
        <div className="flex flex-col font-system">
          <h1 className="text-5xl md:text-7xl font-semibold text-white mb-7">
            My Project.
          </h1>
          <div className="flex justify-between items-center">
            <div className="flex flex-col font-system text-white text-4xl md:text-5xl lg:text-5xl md:h-[400px] lg:h-[450px] lg:place-content-end">
              <ImageOnHover
                name={"Mero Music-Player"}
                setImage={setImage}
                hoverImage={musicPlayer}
                image={image}
              />

              <ImageOnHover
                name={"Mero Calculator"}
                setImage={setImage}
                hoverImage={calculator}
                image={image}
              />

              <ImageOnHover
                name={"Mero Movies"}
                setImage={setImage}
                hoverImage={movieWatch}
                image={image}
              />

              <ImageOnHover
                name={"Guess Game"}
                setImage={setImage}
                hoverImage={guessGame}
                image={image}
              />

              <ImageOnHover
                name={"Mero TextUtils"}
                setImage={setImage}
                hoverImage={textutils}
                image={image}
              />
            </div>
            {image && (
              <div className=" bg-red hidden lg:block overflow-hidden md:h-[400px] lg:h-[450px] md:w-[450px] lg:w-[550px] rounded-tl-[150px] border-r-2 border-b-2 pr-4 pb-4">
                <Images animation={"flip-right"} image={image} />
              </div>
            )}
          </div>
        </div>
      </PagePadding>
    </>
  );
}

export default Project;
