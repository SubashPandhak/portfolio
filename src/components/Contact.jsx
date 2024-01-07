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
        <div className="flex justify-between items-center pb-1 border-b-[1px]">
          <div
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <img
              className="object-fill h-[400px] min-w-[500px]"
              src={contact}
            />
          </div>
          <div
            className="flex w-[400px] flex-col text-white font-system"
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <h1 className=" text-8xl font-semibold mb-7">Contact.</h1>
            <p className="text-4xl mb-8">
              Get in touch with me via social media or email.
            </p>

            <div className="flex justify-between">
              <div className="flex flex-col">
                <div className="text-[#58c3eb] mb-3">
                  <ContactLogo
                    icon={<TwitterLogo color="#58c3eb" size={40} />}
                    name={"Twitter"}
                  />
                </div>
                <div className="text-[#007dbe]">
                  <ContactLogo
                    icon={<LinkedinLogo color="#007dbe" size={40} />}
                    name={"Linkedin"}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-[#3b5998] mb-3">
                  <ContactLogo
                    icon={<FacebookLogo color="#3b5998" size={40} />}
                    name={"Facebook"}
                  />
                </div>
                <div className="text-[#ef0476]">
                  <ContactLogo
                    icon={<InstagramLogo color="#ef0476" size={40} />}
                    name={"Instagram"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PagePadding>
    </>
  );
}

export default Contact;
