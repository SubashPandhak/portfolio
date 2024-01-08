import React from "react";
import PagePadding from "./shared/PagePadding";
import Images from "./shared/Images";
import images from "../assets/profile.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
            style={{ gridTemplateRows: "150px 150px 150px" }}
            className="grid grid-cols-3 gap-[20px] "
          >
            <Images animation={"fade-down-right"} image={images} />
            <Images animation={"fade-down"} image={images} />
            <Images animation={"fade-down-left"} image={images} />
            <div
              data-aos="flip-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              className=" overflow-hidden row-span-2 col-span-2"
            >
              <img
                className="grid-double object-cover  h-[300px] w-[650px] hover:scale-110 transition-all duration-500"
                src={images}
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              className=" overflow-hidden row-span-2"
            >
              <img
                className="grid-double object-cover  h-[300px] w-[300px] hover:scale-110 transition-all duration-500"
                src={images}
              />
            </div>
            {/* <Images animation={"fade-left"} image={images} />
            <Images animation={} image={images} /> */}
          </div>
        </div>
      </PagePadding>
    </>
  );
}

export default Project;
