import React from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../public/images/icons/github-icon.svg"
import LinkedinIcon from "../../public/images/icons/linkedin-icon.svg"


const EmailSection = () => {
    return(
        <section className="grid grid-cols-2 my-12 md:my-12 py-20 gap-4">
            <div>
                <h5 className="text-white text-xl font-bold my-2">Let's Connect</h5>
                <p className="text-[#ADB7BE] mb-4 mx-w-md">
                Hello! I'm actively seeking new career opportunities and would love to connect with professionals 
                in my field. Whether it's networking, discussing potential collaborations, or exploring job opportunities, 
                I'm eager to engage in meaningful conversations. Please feel free to reach out if you have any opportunities 
                or if you'd simply like to connect and exchange ideas. I look forward to hearing from you!

                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://www.linkedin.com/in/oscar-uriel-hernández-ayala/">
                        <Image src={LinkedinIcon} alt="linkedin"/>
                    </Link>
                    <Link href="https://github.com/OUHernandezAyala">
                        <Image src={GithubIcon} alt="github"/>
                    </Link>
                </div>
            </div>
            <div>
                    <form className="flex flex-col gap-2">
                        <label htmlFor="email" type="email" className="text-white">Your Email</label>
                        <input 
                         type="email" 
                         id="email"
                         className="bg-[#181818] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" 
                         required 
                         placeholder="example@mail.com"/>
                         <label htmlFor="subject" type="text" className="text-white">Subject</label>
                        <input 
                         type="text" 
                         id="subject"
                         className="bg-[#181818] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" 
                         required 
                         placeholder="Hello Friend!!!"/>
                         <label htmlFor="message" type="text" className="text-white">Your Message</label>
                        <textarea 
                         name="message"
                         id="message"
                         className="bg-[#181818] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" 
                         required 
                         placeholder="Write whatever you want to say to me!!!"/>
                         <div className="flex justify-center items-center mt-2">
                            <button className="rounded-full w-full py-2.5 px-5 bg-gradient-to-br from-[#0abdc6] via-[#711c91] to-[#ea00d9]  hover:bg-slate-900 hover:text-black text-white">Send</button>
                         </div>
                    </form>
            </div>
        </section>
    )

}

export default EmailSection;