"use client";
import React, {useState} from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import MenuHamburguer from './MenuHamburguer';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';



const NavBar = () => {
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
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212]  border border-[#33353f]  bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto py-5 px-8 md:px-20'>
            <Link href="/" className='flex items-center justify-between text-2xl md:text-5xl text-white font-semibold'>
                <Image 
                className='object-scale-down rounded-full'
                src="/images/planet.gif" 
                alt="logo" 
                width={60}
                height={60}
                />
                <Image
                className='object-scale-down rounded-lg'
                src="/images/name.png"
                alt='name'
                width={160}
                height={110}
                />
            </Link>
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
