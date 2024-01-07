import React from "react";

function Logo(props) {
  console.log("🚀 ~ file: logo.jsx:5 ~ Logo ~ props:", props);

  return (
    <>
      <div className="logo-info">
        <div className="ml-5 mr-5 ">{props.icon}</div>
        <p className="font-system text-xl font-semibold text-white">{props.title}</p>
      </div>
    </>
  );
}

export default Logo;
