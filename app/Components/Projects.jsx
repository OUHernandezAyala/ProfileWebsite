import React from "react";
import ProjectsCards from "./CardsProjects";
import { FaReact } from "react-icons/fa";


const projectsInfo = [
    {
        id:"1",
        title:"My Profile",
        description:"HolA COMO ES TA",
        tech:(
            <div className="flex">
                <FaReact/>
            </div>
        ),
        imagen: "/images/projects/Project1.png",
        gitUrl:"",
        prevUrl:""

    }
]

const ProjectsSection = () => {
    return(
       <div className="py-28">
        <h2 className="text-center text-4xl  font-bold text-white my-4">Projects</h2>
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