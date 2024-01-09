import React from "react";

function Logo(props) {
  return (
    <>
      <div className=" logo-info flex items-center justify-center ">
        {props.icon}
        <p className="font-system text-xl font-normal text-white hover:font-extrabold p-2">
          {props.title}
        </p>
      </div>
    </>
  );
}

export default Logo;
