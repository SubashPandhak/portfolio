import React, { useEffect } from "react";
import PagePadding from "./shared/PagePadding";
import SkillShared from "./shared/SkillShared";
import line from "../assets/undis.png";
import AOS from "aos";
import "aos/dist/aos.css";

import html from "../assets/skill-icon/html.png";
import tailwind from "../assets/skill-icon/tailwind.png";
import css from "../assets/skill-icon/css.png";
import js from "../assets/skill-icon/js.png";
import react from "../assets/skill-icon/react.png";
import flutter from "../assets/skill-icon/flutter.png";
import python from "../assets/skill-icon/python.png";
import dart from "../assets/skill-icon/dart.png";

function Skills() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <PagePadding>
        <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
          <h1 className="font-system text-white text-5xl md:text-7xl font-semibold pb-5">
            Skills.
          </h1>
          <div className="grid grid-cols-3 grid-rows-3 lg:grid-cols-4 lg:grid-rows-2">
            <SkillShared skillIcon={html} skillName={"Html"} />
            <SkillShared skillIcon={css} skillName={"Css"} />
            <SkillShared skillIcon={react} skillName={"React"} />
            <SkillShared skillIcon={js} skillName={"Javascript"} />
            <SkillShared skillIcon={python} skillName={"Python"} />
            <SkillShared skillIcon={dart} skillName={"Dart"} />
            <SkillShared skillIcon={flutter} skillName={"Flutter"} />
            <SkillShared skillIcon={tailwind} skillName={"Tailwind"} />
          </div>
          <img className="h-4 w-full pt-1" src={line} />
        </div>
      </PagePadding>
    </>
  );
}

export default Skills;
