import React from "react";

function EducationShared(props) {
  return (
    <div className="flex my-5">
      <img
        className="h-20 md:h-32 w-20 md:w-32 rounded-tr-xl rounded-bl-xl mr-2 md:mr-4"
        src={props.logo}
      />
      <div className=" text-white font-system">
        <p className="text-3xl md:text-5xl">{props.title}</p>
        <p className="md:text-xl">{props.collegeName}</p>
        <p className="md:text-xl">{props.date}</p>
      </div>
    </div>
  );
}

export default EducationShared;
