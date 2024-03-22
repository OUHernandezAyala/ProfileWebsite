"use client";
import React, {useState, useTransition} from "react";
import Image from "next/image";
import TabAboutMe from "./TabAboutMe";

const AboutMe = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()
    const handelTapChange = (id) => {
            startTransition(
                () => {setTab(id)}
            );
    };
const tabInfo = [
    {
        title:"Skills",
        id:"skills",
        content:(
            <ul className="list-disk pl-4">
                <li>Software Developer 🖥️</li>
                <li>Computer Engineer 💻</li>
                <li>Communication 📡</li>
                <li>Computer Security 🔒</li>
                <li>Scrum 🔄</li>
            </ul>
        )
    },
    {
        title:"Education",
        id:"education",
        content:(
            <ul className="list-disk pl-4">
                <li>Informatic Engineer (UPIICSA) 🎓</li>
                <li>Internet (4Geeks) 🌐</li>
            </ul>
        )
    },
    {
        title:"Experience",
        id:"experience",
        content:(
            <ul>
                <li className="list-disk pl-4">Traffic Engineering (SSC)🚦</li>
            </ul>
        )
    }
]

    return(
        <section id="about" className="text-white sm:pt-5 ">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-18 px-4 pt-28 xl:gap-16 sm:px-16 max-w-600 max-h-600">
                <Image 
                src="/images/desk1.gif"
                alt="ImageAboutme"
                className="rounded- rounded-md py-4"
                width={599}
                height={599}
                />
                <div className="mt-4 mb:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-[#0abdc6]  to-[#ea00d9]">
                        About me!!
                    </h2>
                    <p className="text-base lg:text-lg">
                        <span > My name is Oscar Uriel, a student software developer in<span className="font-bold"> computer engineering from UPIICSA</span> , with a course at 4Geeks to enhance my skills in web development.</span>
                        <span className="font-bold"> I have an internship in Traffic Engineering, Secretary of Citizen Security</span>, CDMX, where I supervise traffic events, optimize workflow, and apply effective communication skills. Currently, I`m focused on refining my skills in web development and exploring new technologies to enhance my software development experience. 🤝🚀
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabAboutMe selectTab={() => handelTapChange("skills")} active={tab === "skills"}>
                            Skills
                        </TabAboutMe>
                        <TabAboutMe selectTab={() => handelTapChange("education")} active={tab === "education"}>
                            Education
                        </TabAboutMe>
                        <TabAboutMe selectTab={() => handelTapChange("experience")} active={tab === "experience"}>
                            Experiense
                        </TabAboutMe>
                    </div>
                    <div className="mt-9">{tabInfo.find((content)=>(content.id == tab)).content}</div>
                </div>
            </div>
        </section>
        
    )
}

export default AboutMe;