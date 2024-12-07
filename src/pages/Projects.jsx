import React from 'react'
import { NavLink } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <div className='flex w-[100%] justify-center items-center bg-white'>
      <div className='flex flex-col flex-wrap justify-center items-center gap-2 md:gap-8 w-[90%] bg-black text-white p-4'>

        <span className='flex text-2xl'>Projects</span>

        <div className='flex md:flex-nowrap flex-wrap-reverse justify-center gap-2'>
          <div className='flex flex-col w-[70%] md:w-[33%] gap-2 justify-center items-center'>
            <span className='flex text-xl gap-2 items-center justify-center'>
              <span className='flex text-sm'>Food delivery app</span>
              <NavLink className='flex' to="https://github.com/Vikesh115" target='none'><FaExternalLinkAlt size={20} /></NavLink>
            </span>
            <span className='flex md:flex-row flex-wrap gap-2 md:gap-6 justify-center'>
              <span className='flex text-black font-semibold bg-white rounded-md p-1 h-6 items-center justify-center'>React</span>
              <span className='flex text-black font-semibold bg-white rounded-md p-1 h-6 items-center justify-center'>Nodejs</span>
              <span className='flex text-black font-semibold bg-white rounded-md p-1 h-6 items-center justify-center'>Express</span>
              <span className='flex text-black font-semibold bg-white rounded-md p-1 h-6 items-center justify-center'>MongoDB</span>
            </span>
          </div>
          <div className='flex w-[80%]  md:w-[30%] h-[30%]'>
            <img src="https://images.pexels.com/photos/29306497/pexels-photo-29306497/free-photo-of-delicious-doner-kebab-with-fries-and-cola.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="food" className='flex rounded-2xl' />
          </div>
        </div>

        <div className='flex flex-wrap md:flex-nowrap md:w-[60%] justify-center gap-2 md:gap-4 p-2'>
          <div className='flex w-[80%] md:w-[30%] h-[30%]'>
            <img src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="food" className='flex rounded-2xl' />
          </div>
          <div className='flex flex-col w-[70%] md:w-[40%] gap-2 justify-center items-center'>
            <span className='flex text-xl gap-2 items-center justify-center'>
              <span className='flex text-sm'>GET Youtube Subscriber</span>
              <span className='flex'><NavLink to="https://github.com/Vikesh115" target='none'><FaExternalLinkAlt size={20} /></NavLink></span>
            </span>
            <div className='flex flex-row flex-wrap gap-2 md:gap-6 justify-center'>
              <span className='flex text-black font-semibold bg-white rounded-md p-1 h-6 items-center justify-center'>Rest API</span>
              <span className='flex text-black font-semibold bg-white rounded-md p-1 h-6 items-center justify-center'>Nodejs</span>
              <span className='flex text-black font-semibold bg-white rounded-md p-1 h-6 items-center justify-center'>Express</span>
              <span className='flex text-black font-semibold bg-white rounded-md p-1 h-6 items-center justify-center'>MongoDB</span>
              <span className='flex text-black font-semibold bg-white rounded-md p-1 h-6 items-center justify-center'>POSTMAN</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects