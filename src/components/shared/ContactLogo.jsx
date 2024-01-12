import React from "react";

function ContactLogo(props) {
  return (
    <>
      <div
        id="contact-logo"
        className="flex gap-2 font-system items-center font-semibold text-xl md:text-4xl lg:text-4xl "
      >
        <div>{props.icon}</div>
        <p>{props.name}</p>
      </div>
    </>
  );
}

export default ContactLogo;
