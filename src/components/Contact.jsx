import React from "react";
import PagePadding from "./shared/PagePadding";
import {
  TwitterLogo,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ContactLogo from "./shared/ContactLogo";
import contact from "../assets/contact.png";

function Contact() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <PagePadding>
        <div className="flex flex-col justify-center items-center pb-1 border-b-[1px]">
          <div
            className="flex flex-col text-white font-system "
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <h1 className=" text-5xl font-semibold mb-7">Contact.</h1>
            <div className="text-4xl mb-8">
              <p>Have a question, problem or project?</p>
              <p>Let's talk.</p>
              <p>Get in touch with me via social media or email.</p>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="flex justify-between items-center"
          >
            <img
              className="object-fill h-[200px] min-w-[250px]"
              src={contact}
            />
            <div className="flex flex-col">
              <div className="text-[#58c3eb] p-2">
                <ContactLogo
                  icon={<TwitterLogo color="#58c3eb" size={35} />}
                  name={"Twitter"}
                />
              </div>
              <div className="text-[#007dbe] p-2">
                <ContactLogo
                  icon={<LinkedinLogo color="#007dbe" size={35} />}
                  name={"Linkedin"}
                />
              </div>
              <div className="text-[#3b5998] p-2">
                <ContactLogo
                  icon={<FacebookLogo color="#3b5998" size={35} />}
                  name={"Facebook"}
                />
              </div>
              <div className="text-[#ef0476] p-2">
                <ContactLogo
                  icon={<InstagramLogo color="#ef0476" size={35} />}
                  name={"Instagram"}
                />
              </div>
            </div>
          </div>
        </div>
      </PagePadding>
    </>
  );
}

export default Contact;
