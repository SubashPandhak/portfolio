import React from "react";

function Images(props) {
  return (
    <>
      <div
        data-aos={props.animation}
        data-aos-delay="50"
        data-aos-duration="1000"
        className="hover:cursor-pointer overflow-hidden h-[150px] border-2 rounded-md"
      >
        <img
          className="grid-item object-cover object-center hover:scale-110 h-full w-full transition-all duration-500 "
          src={props.image}
        />
      </div>
    </>
  );
}

export default Images;
