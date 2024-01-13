import React from "react";
import PagePadding from "./shared/PagePadding";
import EducationShared from "./shared/EducationShared";
import acemlogo from "../assets/acemlogo.png";
import xavier from "../assets/xavierlogo.jpeg";
import saptakoshi from "../assets/saptalogo.png";
import line from "../assets/undis.png";

function Education() {
  return (
    <>
      <PagePadding>
        <div>
          <h1 className="font-system text-5xl md:text-7xl text-white p-5 font-semibold">
            Education.
          </h1>
          <EducationShared
            logo={acemlogo}
            title={"Tribhuvan University"}
            collegeName={"Advanced College of Engineering and Manangement"}
            date={"2019-2024"}
          />
          <EducationShared
            logo={xavier}
            title={"High School"}
            collegeName={"Xavier International College"}
            date={"2017-2019"}
          />
          <EducationShared
            logo={saptakoshi}
            title={"School"}
            collegeName={"Saptakoshi English Boarding School"}
            date={"upto 2017"}
          />
          <img className="h-4 w-full pt-1" src={line} />
        </div>
      </PagePadding>
    </>
  );
}

export default Education;
