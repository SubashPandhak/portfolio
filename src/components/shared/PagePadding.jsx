import React from "react";

function PagePadding(props) {
  return (
    <div id="home" className="px-[200px] pt-[200px] pb-[50px]">
      {props.children}
    </div>
  );
}

export default PagePadding;
