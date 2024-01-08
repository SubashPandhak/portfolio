import React from "react";

function Images(props) {
  return (
    <>
      <div
        data-aos={props.animation}
        data-aos-delay="50"
        data-aos-duration="1000"
        className="hover:cursor-pointer overflow-hidden "
      >
        <img
          className="grid-item object-cover h-[150px] w-[300px] hover:scale-110 transition-all duration-500"
          src={props.image}
        />
      </div>
    </>
  );
}

export default Images;
