"use client";
import React from "react";
import Image from 'next/image';
import { TypeAnimation } from "react-type-animation";


const MySection = () => {
    const downloadCV = () => {
        window.open("/documents/CV-Oscar-Uriel-Hernández-Ayala.pdf", "_blank");
      };
    
      const scrollToEmailSection = () => {
        document.getElementById('mail-sectione').scrollIntoView({ behavior: 'smooth' });
      };
    return (
        <section id="home" className="lg:py-16 ">
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-8 flex flex-col mb-2 place-self-center text-center sm:text-left justify-self-start ">
                    <h1 className="mb-4 text-4xl lg:text-6xl mx-4 lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-br  from-[#0abdc6]  to-[#ea00d9]">
                            Hello, I`m {" "}
                        </span>
                        <TypeAnimation
                        sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Oscar Uriel',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Software Developer',
                        1000,
                        'Informatic Engineer',
                        1000
                        ]}
                        wrapper="span"
                        speed={20}
                        repeat={Infinity}
                    />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
                     As a Web Developer with an unwavering passion for unlocking new possibilities, I embrace a philosophy that resonates deeply: Begin by doing what`s necessary; then do what`s possible; and suddenly you find yourself accomplishing the impossible.🚀
                    </p>
                    <div className="mt-4 mb-2">
                        <button onClick={scrollToEmailSection} className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 mt-1 bg-gradient-to-br from-[#0abdc6] via-[#711c91] to-[#ea00d9]  hover:bg-slate-900 hover:text-white text-black">
                            Contact me
                        </button>
                        <button onClick={downloadCV} className="px-1 py-1 w-full sm:w-fit rounded-full mt-3 bg-gradient-to-br from-[#0abdc6] via-[#711c91] to-[#ea00d9] hover:bg-slate-100 hover:text-black text-white">
                            <span className="block bg-[#121212] rounded-full px-6 py-2 hover:bg-slate-800 ">
                                Download CV
                            </span>
                        </button>
                    </div>
                </div>
                <div className=" felx lg:col-span-4 mt-4 ml-2 lg:mt-0 place-self-center">
                    <div className="rounded-full bg-[#181818] relative w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] flex justify-center">
                        <Image
                            src="/images/foto-oscar.png"
                            alt="profile image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full z-3 shadow-lg shadow-blue-500 hover:animate-pulse"
                            width={240}
                            height={240}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MySection;
