import React from "react";

function Images(props) {
  return (
    <>
      <div
        data-aos={props.animation}
        data-aos-delay="50"
        data-aos-duration="1000"
        className="hover:cursor-pointer overflow-hidden h-full w-full"
      >
        <img
          className=" object-cover object-left h-full w-full transition-all duration-500 "
          src={props.image}
        />
      </div>
    </>
  );
}

export default Images;
