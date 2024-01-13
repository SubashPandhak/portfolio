import React from "react";

function SkillShared(props) {
  return (
    <div className=" text-white font-system py-3 flex flex-col items-center w-fit hover:cursor-pointer hover:font-bold">
      <img
        className="h-14 md:h-32 w-20 md:w-40 object-contain"
        src={props.skillIcon}
      />
      <p className="w-fit text-2xl md:text-4xl">{props.skillName}</p>
    </div>
  );
}

export default SkillShared;
