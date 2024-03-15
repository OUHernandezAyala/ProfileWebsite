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
                <li>React</li>
                <li>Flask</li>
                <li>SQL</li>
                <li>Html</li>
                <li>Css(taildwind)</li>
            </ul>
        )
    },
    {
        title:"Education",
        id:"education",
        content:(
            <ul className="list-disk pl-4">
                <li>Informatic Engineer (UPIICSA)</li>
                <li>Full-Stack (4Geeks)</li>
            </ul>
        )
    },
    {
        title:"Experience",
        id:"experience",
        content:(
            <ul>
                <li className="list-disk pl-4">Traffic Engineering (SSC)</li>
            </ul>
        )
    }
]

    return(
        <section className="text-white sm:pt-5 ">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-18 px-4 pt-28 xl:gap-16 sm:px-16">
                <Image 
                src="/images/desk1.gif"
                alt="ImageAboutme"
                className="rounded- rounded-md py-4"
                width={600}
                height={600}
                />
                <div className="mt-4 mb:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-[#0abdc6]  to-[#ea00d9]">
                        About me!!
                    </h2>
                    <p className="text-base lg:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad 
                        aliquam rem vel necessitatibus in voluptatem eligendi natus magni! 
                        Quibusdam fugit aliquid possimus ex dolor aut est cumque adipisci 
                        autem neque? 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed alias 
                        libero excepturi laudantium blanditiis repellat tenetur, molestiae vel 
                        possimus, quae nulla aperiam explicabo maxime eveniet rerum non laboriosam 
                        assumenda fugiat.
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