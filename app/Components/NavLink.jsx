import React from "react";
import Link from "next/link";

const NavLink = ({href, title}) =>{

    // Función para hacer scroll a una sección después de click en navbar
    function scrollSection(id) {
        const section = document.querySelector(id)
        const yOffset = -100
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset

        window.scrollTo({ top: y, behavior: "smooth" })
    }

    return(
        <a
        className="block py-2 pt-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer"
        onClick={() => scrollSection(href)}
        >
            {title}
        </a>
    )

};

export default NavLink;