import React from "react";
import ProjectsCards from "./CardsProjects";
import { FaReact } from "react-icons/fa";


const projectsInfo = [
    {
        id:"1",
        title:"Pet+",
        description:"Web app for pet owners and veterinarians to track their pets/patients.",
        tech:"React | Flask | JavaScript | Python | Cloudinary API| HTML | CSS | Bootstrap | SQL | SCRUM",
        imagen: "/images/projects/Project1.png",
        gitUrl: "https://github.com/OUHernandezAyala/Login-Flask",
        prevUrl: "https://github.com/OUHernandezAyala/Login-Flask"
    },{
        id:"2",
        title: "Login",
        description: "Login using an interface and authentication with JWT.",
        tech:"React | Flask | JavaScript | Python | HTML | CSS | Bootstrap | SQL | API | JSON",
        imagen: "/images/projects/Project2.png",
        gitUrl: "https://github.com/OUHernandezAyala/Login-Flask",
        prevUrl: "https://github.com/OUHernandezAyala/Login-Flask"

    },
    {
        id: "3",
        title: "Tesla Clone",
        description: "A landing page for Tesla currently in development.",
        tech:"Astro | HTML | Tailwind",
        imagen: "/images/projects/Project3.png",
        gitUrl: "https://github.com/OUHernandezAyala/Tesla-Clone",
        prevUrl: "https://tesla-clone-nl92pko7j-oscar-uriels-projects.vercel.app/"

    },
    {
        id: "4",
        title: "Star Wars Landing Page with API",
        description: "Built a Star Wars page consuming an API.",
        tech:"React | JavaScript | HTML | Bootstrap | JSON",
        imagen: "/images/projects/Project4.png",
        gitUrl: "https://github.com/OUHernandezAyala/React-StarWars-OUHernandezAyala",
        prevUrl: "https://github.com/OUHernandezAyala/React-StarWars-OUHernandezAyala"

    }
    ,{
        id: "5",
        title: "Neural Link",
        description: "A project utilizing a custom neural network model trained to convert Celsius to Fahrenheit.",
        tech: "Python | tensorflow | numpy | matplotlib",
        imagen: "/images/projects/Project5.png",
        gitUrl: "https://github.com/OUHernandezAyala/NeuralLink",
        prevUrl: "https://github.com/OUHernandezAyala/NeuralLink"

    },{
        
        id: "6",
        title: "Spotify Player",
        description: "A spotify player in development.",
        tech:"React | Vite | JavaScript | HTML | MaterialUI | Spotify API |Axios",
        imagen: "/images/projects/Project6.png",
        gitUrl: "https://github.com/OUHernandezAyala/Spotify-Project",
        prevUrl: "https://github.com/OUHernandezAyala/Spotify-Project"

    }
]

const ProjectsSection = () => {
    return(
       <div id="projects" className="py-20">
        <h2 className="text-4xl font-bold my-4 text-transparent text-center bg-clip-text bg-gradient-to-br from-[#0abdc6]  to-[#ea00d9]">Projects</h2>
        <div  className="grid md:grid-cols-3 gap-10 md:gap-6 justify-center mx-2" >
        {projectsInfo.map((projects)=> 
                <ProjectsCards 
                key={projects.id} 
                title={projects.title} 
                description={projects.description} 
                imgenUrl={projects.imagen}
                prevUrl={projects.prevUrl}
                gitUrl={projects.gitUrl}
                tech={projects.tech}
                />
                )}
        </div>
       </div>
        
    )
}

export default ProjectsSection