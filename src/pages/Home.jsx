import React from 'react'
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiDiamonds } from "react-icons/gi";

function Home() {
  return (
    <div className='flex w-[100%] justify-center items-center bg-white'>
      <div className='flex flex-col flex-wrap justify-center items-center gap-8 w-[90%] bg-black text-white mt-20 p-8'>

        <div className='flex text-4xl flex-row gap-2'>
          <div className='flex'><GiDiamonds /></div>
          <div className='flex'>Vikesh Raut</div>
        </div>

        <div className='text-2xl max-w-[70%]'>
          Proficient Full Stack Developer specialised in the MERN stack, dedicated to
          delivering high performance and responsive web applications. I am passionate
          about taking on challenging projects and staying updated with emerging
          technologies to ensure exceptional web development solutions.
        </div>

        <div className='flex flex-wrap md:flex-row gap-4 justify-center items-center text-6xl'>
          <div>MERN</div>
          <div>Stack</div>
          <div>Developer</div>
        </div>

        <div className='flex flex-row max-[500px]:flex-col max-[500px]:gap-6'>
          <NavLink className='flex flex-row items-center justify-center bg-gray-50 rounded-lg h-10 w-28 ml-8 font-bold text-slate-950 gap-2' to="https://github.com/Vikesh115" target='none'><FaGithub />Github</NavLink>
          <NavLink className='flex flex-row items-center justify-center bg-gray-50 rounded-lg h-10 w-28 ml-8 font-bold text-slate-950 gap-2' to='https://www.linkedin.com/in/vikesh-raut/' target='none'><FaLinkedin />LinkedIn</NavLink>
        </div>

      </div>
    </div>
  )
}

export default Home