import React from "react";
import PagePadding from "./PagePadding";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import about from "../../assets/about.png";

function SharedAbout() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <PagePadding>
        <div className="flex justify-between items-center pb-1 border-b-[1px] text-white">
          <div
            className="flex flex-col w-[600px] font-system"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <h1 className=" text-8xl mb-7 font-semibold">About.</h1>
            <p className="text-4xl mb-6">
              I'm a product designer based in sunny Sydney, Australia.
            </p>
            <p className="text-2xl">
              Since 2005, I've enjoyed turning complex problems into simple,
              beautiful and intuitive designs. When I'm not pushing pixels,
              you'll find me cooking, gardening or working out in the park.
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <img className="h-[400px] min-w-[500px] object-fill" src={about} />
          </div>
        </div>
      </PagePadding>
    </>
  );
}

export default SharedAbout;
