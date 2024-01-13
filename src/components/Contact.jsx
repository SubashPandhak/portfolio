import React from "react";
import PagePadding from "./shared/PagePadding";
import {
  GithubLogo,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ContactLogo from "./shared/ContactLogo";
import contact from "../assets/contact.png";
import line from "../assets/undis.png";

function Contact() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <PagePadding>
        <div className="flex flex-col pb-1">
          <div className="w-full flex justify-end">
            <div
              className="flex flex-col w-fit items-end text-white font-system "
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <h1 className=" text-5xl md:text-7xl font-semibold mb-7 lg:mb-5">
                Contact.
              </h1>
              <div className=" text-3xl md:text-5xl lg:text-5xl mb-8 lg:mb-5">
                <div className=" flex flex-col items-end lg:flex gap-2">
                  <p>Have a question, problem or project?</p>
                  <p>Let's talk.</p>
                </div>
                <p className="flex flex-col items-end">
                  Get in touch with me via social media or email.
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="flex justify-between gap-7 lg:gap-9 items-center "
          >
            <img
              className="object-fill h-[200px] md:h-[300px] w-[250px] md:w-[350px]"
              src={contact}
            />
            <div className="flex flex-col lg:flex-row lg:gap-5">
              <div>
                <a
                  href="https://www.linkedin.com/in/subash-limbu-88967a242/"
                  target="_blank"
                >
                  <div className="text-[#007dbe] p-2">
                    <ContactLogo
                      icon={<LinkedinLogo color="#007dbe" />}
                      name={"Linkedin"}
                    />
                  </div>
                </a>
                <a href="https://github.com/SubashPandhak" target="_blank">
                  <div className="text-[#808080] p-2">
                    <ContactLogo
                      icon={<GithubLogo color="#808080" />}
                      name={"Github"}
                    />
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="https://www.facebook.com/profile.php?id=100055812813830"
                  target="_blank"
                >
                  <div className="text-[#3b5998] p-2">
                    <ContactLogo
                      icon={<FacebookLogo color="#3b5998" />}
                      name={"Facebook"}
                    />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/blazesuraj77/"
                  target="_blank"
                >
                  <div className="text-[#ef0476] p-2">
                    <ContactLogo
                      icon={<InstagramLogo color="#ef0476" />}
                      name={"Instagram"}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <img className="h-4 w-full pt-1" src={line} />
        </div>
      </PagePadding>
    </>
  );
}

export default Contact;
