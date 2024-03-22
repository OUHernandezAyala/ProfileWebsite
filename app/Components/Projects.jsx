import React from "react";
import ProjectsCards from "./CardsProjects";
import { FaReact } from "react-icons/fa";


const projectsInfo = [
    {
        id:"1",
        title:"My Profile",
        description:"From web development to graphic design, my portfolio reflects my passion and dedication to excellence in every endeavor.",
        tech:(
            <div className="flex">
                <FaReact/>
            </div>
        ),
        imagen: "/images/projects/Project1.png",
        gitUrl:"https://github.com/OUHernandezAyala/ProfileWebsite",
        prevUrl:"https://profile-oscar-uriel-hernandez-ayala-oscar-uriels-projects.vercel.app/"

    }
]

const ProjectsSection = () => {
    return(
       <div id="projects" className="py-20">
        <h2 className="text-4xl font-bold my-4 text-transparent text-center bg-clip-text bg-gradient-to-br from-[#0abdc6]  to-[#ea00d9]">Projects</h2>
        <div    className="grid md:grid-cols-3 gap-8 md:gap-10" >
        {projectsInfo.map((projects)=> 
                <ProjectsCards 
                key={projects.id} 
                title={projects.title} 
                description={projects.description} 
                imgenUrl={projects.imagen}
                prevUrl={projects.prevUrl}
                gitUrl={projects.gitUrl}
                />
                )}
        </div>
       </div>
        
    )
}

export default ProjectsSection