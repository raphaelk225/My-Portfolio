import React from "react";
import PDF from "../../../src/assets/CV-OTCHOUMOU-RAPHAEL.pdf";

const Footer = () => {
  return (
    <section>
      <div className="bg-gray-300 w-full p-5 pb-10 text-center mt-40">
        <div className="flex flex-col items-center">
          <a href={PDF} download="CV_RAPHAEL-KOUAMELAN.pdf">
            <button className="relative flex-shrink-0 top-0 -mt-16  overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 bg-yellow-700 hover:bg-yellow-600 border-4 border-white rounded-full group duration-300 transform hover:scale-105 ">
              <span className="relative z-10 text-xl font-medium text-white ">
                Download CV
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Footer;
