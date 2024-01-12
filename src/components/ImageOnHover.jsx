import React from "react";
import line from "../assets/undis.png";

function ImageOnHover(props) {
  const handleImageEnter = () => {
    props.setImage(props.hoverImage);
  };

  const handleImageLeave = () => {
    props.setImage(null);
  };

  return (
    <>
      <div
        className="w-fit cursor-pointer hover:font-bold"
        onMouseEnter={handleImageEnter}
        onMouseLeave={handleImageLeave}
      >
        <a href="https://main--mero-music-player.netlify.app/" target="_blank">
          <p className="pt-4 md:pt-6 ">{props.name}</p>
          <img className="h-2 w-full " src={line} />
        </a>
      </div>
    </>
  );
}

export default ImageOnHover;
