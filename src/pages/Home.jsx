import React from 'react'
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiDiamonds } from "react-icons/gi";

function Home() {
  return (
    <div className='flex w-[100%] justify-center items-center bg-white'>
      <div className='flex flex-col flex-wrap justify-center items-center md:gap-6 gap-4 w-[100%] bg-black text-white mt-20 p-8'>

        <div className='flex text-4xl flex-row gap-2'>
          <span className='flex'><GiDiamonds /></span>
          <span className='flex'>Vikesh Raut</span>
        </div>

        <span className='md:text-2xl max-w-[70%] md:m-2px'>
          Proficient Full Stack Developer specialised in the MERN stack, dedicated to
          delivering high performance and responsive web applications. I am passionate
          about taking on challenging projects and staying updated with emerging
          technologies to ensure exceptional web development solutions.
        </span>

        <span className='flex flex-wrap max-w-[70%] md:flex-row gap-2 md:gap-4 justify-center items-center text-lg font-bold md:text-4xl'>
          <span>MERN</span>
          <span>Stack</span>
          <span>Developer</span>
        </span>

        <div className='flex flex-row gap-2'>
          <NavLink className='flex flex-row items-center justify-center bg-gray-50 rounded-lg h-10 w-28 font-bold text-slate-950 gap-2' to="https://github.com/Vikesh115" target='none'><FaGithub />Github</NavLink>
          <NavLink className='flex flex-row items-center justify-center bg-gray-50 rounded-lg h-10 w-28 font-bold text-slate-950 gap-2' to='https://www.linkedin.com/in/vikesh-raut/' target='none'><FaLinkedin />LinkedIn</NavLink>
        </div>

      </div>
    </div>
  )
}

export default Home