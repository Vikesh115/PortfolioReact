import React from 'react'
import { NavLink } from "react-router-dom";
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className='flex w-[100%] justify-center items-center bg-white'>
      <div className='flex flex-wrap justify-center items-center gap-8 w-[90%] bg-black text-white p-8'>
        <div className='flex flex-row gap-6'>
          <NavLink><FaGithubSquare size={24}/></NavLink>
          <NavLink><FaLinkedinIn size={24}/></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Footer