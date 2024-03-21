"use client";
import React, {useState} from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import MenuHamburguer from './MenuHamburguer';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';



const NavBar = () => {

    // Función para hacer scroll a una sección después de click en navbar
    function scrollSection(id) {
        const section = document.getElementById(id)
        const yOffset = -100
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset

        window.scrollTo({ top: y, behavior: "smooth" })
    }

    const[navbarOpen, setNavbarOpen] = useState(false)


    const navLinks = [
        {
            title: "About",
            path: "#about"        
        },
        {
            title: "Project",
            path: "#projects"
        },
        {
            title: "Contact",
            path: "#mail-sectione"
        }
    ]
    return(
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212]  border border-[#33353F]  bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto p-2 container'>
            <a className='flex items-center gap-5 justify-between text-xl md:text-5xl text-white font-semibold cursor-pointer' onClick={() => scrollSection("home")}>
                <Image 
                className='object-scale-down rounded-full'
                src="/images/planet.gif" 
                alt="" 
                width={60}
                height={60}
                />
                <span className='text-[25px]'>My Profile</span> 
            </a>
            <div className='mobile-menu block md:hidden'>
                {
                    navbarOpen ? (
                        <button onClick={()=>setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <XMarkIcon className='h-5 w-5'/>
                        </button>)
                        : (
                        <button onClick={()=>setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <Bars3Icon className='h-5 w-5'/>
                        </button>)       
                }
            </div>
            <div className='menu hidden md:block md:w-auto pr-2' id='navbar'>
                <ul className='flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0'>
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        {
            navbarOpen ? <MenuHamburguer links={navLinks}/> : null
        }
    </nav>    
    )
};

export default NavBar;
