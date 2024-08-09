import React from 'react'
import logo from "../assets/Mylogo.jpg"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"

import {FaInstagram} from "react-icons/fa6"




const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex items-center">
      <img className="mx-2 w-10" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/mohd-shaqib-visal-3932a91a2/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Shaqib5432" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    
      <a href="https://www.instagram.com/shaqibvisal" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </div>
  </nav>
);
};

export default Navbar;