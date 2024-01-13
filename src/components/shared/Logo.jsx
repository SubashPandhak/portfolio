import React from "react";

function Logo(props) {
  return (
    <>
      <div className=" logo-info flex items-center justify-center ">
        {props.icon}
        <p className="font-system text-base md:text-4xl lg:text-5xl font-bold text-white hover:font-extrabold p-1 md:p-2 lg:p-6">
          {props.title}
        </p>
      </div>
    </>
  );
}

export default Logo;
