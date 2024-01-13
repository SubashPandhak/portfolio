import React from "react";

function PagePadding(props) {
  return (
    <div className="px-[20px] md:px-[30px] lg:px-[150px] pt-[200px] pb-[50px] h-[100vh] lg:h-fit">
      {props.children}
    </div>
  );
}

export default PagePadding;
