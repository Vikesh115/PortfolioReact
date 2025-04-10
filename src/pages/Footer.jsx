import React from 'react'
import { NavLink } from "react-router-dom";
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className='flex w-[100%] justify-center items-center'>
      <div className='flex flex-wrap flex-col justify-center items-center gap-3 md:gap-6 w-[100%]  p-2'>
        <span className='flex justify-center md:text-2xl'>Contact</span>
        <form action="post" className='flex flex-col justify-center items-center max-w-[70%] '>
          <input type="text" name="name" placeholder='name' id="" className='flex p-2 rounded-2xl'/>
          <input type="email" name="email" placeholder='email' id="" className='flex m-2 p-2 rounded-2xl' />
          <input type="number" name="number" placeholder='number' id="" className='flex p-2 rounded-2xl'/>
        </form>
        <div className='flex flex-row gap-6'>
          <NavLink to="https://github.com/Vikesh115" target='none'><FaGithubSquare size={24}/></NavLink>
          <NavLink to='https://www.linkedin.com/in/vikesh-raut/' target='none'><FaLinkedinIn size={24}/></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Footer
