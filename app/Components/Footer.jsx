import React from "react";
import Image from "next/image";
import next from "next";

const Footer = () => {
 return(
    <footer className="footer border border-t-[#33353F] border-r-transparent border-l-transparent border-b-transparent">
        <div className="container p-5 flex justify-between">
            <span className=" text-font-bold">
                MyProfile
            </span>
            <div className=" flex-col items-center justify-center ">
                <p className=" text-white p-2">This project has been built with:</p>
                <div className="justify-center w-full">
                    <Image
                    src={`/images/icons/next.png`}
                    alt="next"
                    className='rounded-lg mx-auto'
                    width={30}
                    height={30}
                    />
                </div>
            </div>
            <div className="flex-col items-center text-slate-600">
                <p>urieloha710@gmail.com</p>
            </div>
        </div>
    </footer>
 )   
}

export default Footer;