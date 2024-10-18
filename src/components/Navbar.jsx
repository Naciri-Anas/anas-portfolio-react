import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="  mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
    <a  href =""className="text-white font-bold mx-2">Anas Naciri</a>

    </div>
      
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href='https://www.linkedin.com/in/anas-naciri'><FaLinkedin /></a> 
       <a href='https://github.com/Naciri-Anas'><FaGithub/></a>
        <a href='https://www.youtube.com/@anasnaciri5089'><FaYoutube/></a>
      </div>
    </nav>
  )
}

export default Navbar
