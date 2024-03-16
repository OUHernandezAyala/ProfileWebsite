import Image from "next/image";
import MySection from "./Components/MySection";
import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import ProjectsSection from "./Components/Projects";
import EmailSection from "./Components/EmailSection";
import Footer from "./Components/Footer";
import Stack from "./Components/Stack";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar/>
      <div className="container mt-24 mx-auto px-12 py-12">
        <MySection/>
        <AboutMe/>
        <Stack/>
        <ProjectsSection/>
        <EmailSection/>
        <Footer/>
      </div>
    </main>
  );
}
