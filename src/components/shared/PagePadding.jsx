import React from "react";

function PagePadding(props) {
  return (
    <div
      id="home"
      className="px-[20px] md:px-[30px] lg:px-[150px] pt-[200px] pb-[50px]"
    >
      {props.children}
    </div>
  );
}

export default PagePadding;
