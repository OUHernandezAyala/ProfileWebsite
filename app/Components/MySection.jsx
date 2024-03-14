"use client";
import React from "react";
import Image from 'next/image';
import { TypeAnimation } from "react-type-animation";


const MySection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-7 flex flex-col mb-2 place-self-center text-center sm:text-left">
                    <h1 className="mb-4 text-4xl lg:text-6xl font-extrabold">
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente maxime tempora dolore illo ipsum excepturi voluptates beatae, saepe sed dolor illum quasi voluptatum alias libero dolorum quas? Cum, ullam at!
                    </p>
                    <div className="mt-4 mb-2">
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 mt-1 bg-gradient-to-br from-[#0abdc6] via-[#711c91] to-[#ea00d9]  hover:bg-slate-900 hover:text-white text-black">
                            Hire me
                        </button>
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full mt-3 bg-gradient-to-br from-[#0abdc6] via-[#711c91] to-[#ea00d9] hover:bg-slate-100 hover:text-black text-white">
                            <span className="block bg-[#121212] rounded-full px-6 py-2 hover:bg-slate-800 ">
                                Download CV
                            </span>
                        </button>
                    </div>
                </div>
                <div className=" felx lg:col-span-5 mt-4 lg:mt-0 place-self-center">
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
