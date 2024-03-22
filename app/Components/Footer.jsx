import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-r-transparent border-l-transparent border-b-transparent">
      <div className="container p-5 md:flex items-center justify-evenly md:gap-4">
        <span className="md:text-left text-center text-font-bold md:col-span-1 block">MyProfile</span>
        <div className="md:col-span-1 flex flex-col text-center mb-1 justify-center md:justify-start items-center">
          <p className="text-white p-2">This project has been built with:</p>
          <div className="justify-center">
            <Image
              src={`/images/icons/next.png`}
              alt="next"
              className="rounded-lg mx-auto"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className="flex md:flex-row items-center md:w-auto w-full text-center justify-center md:justify-end text-slate-600 md:col-span-2">
          <p>urieloha710@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

