import React from 'react'
import { NavLink } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <div className='flex w-[100%] justify-center items-center bg-white'>
      <div className='flex flex-col flex-wrap justify-center items-center gap-8 w-[90%] bg-black text-white p-8'>

        <div className='flex text-2xl'>Projects</div>

        <div className='flex flex-row flex-wrap overflow-auto justify-center gap-16 '>
          <div className='flex flex-col w-[40%] gap-4 justify-center items-center'>
            <div className='flex text-3xl gap-2 items-center justify-center'>
              <div className='flex'>Food delivery app</div>
              <NavLink className='flex' to="https://github.com/Vikesh115" target='none'><FaExternalLinkAlt size={20} /></NavLink>
            </div>
            <div className='flex flex-row flex-wrap gap-6'>
              <div className='flex text-black bg-white rounded-2xl p-2'>React</div>
              <div className='flex text-black bg-white rounded-2xl p-2'>Nodejs</div>
              <div className='flex text-black bg-white rounded-2xl p-2'>Express</div>
              <div className='flex text-black bg-white rounded-2xl p-2'>MongoDB</div>
            </div>
          </div>
          <div className='flex w-[30%] h-[30%]'>
            <img src="https://images.pexels.com/photos/29306497/pexels-photo-29306497/free-photo-of-delicious-doner-kebab-with-fries-and-cola.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="food" className='flex rounded-2xl' />
          </div>
        </div>

        <div className='flex flex-row flex-wrap overflow-auto justify-center gap-16 '>
          <div className='flex w-[30%] h-[30%]'>
            <img src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="food" className='flex rounded-2xl' />
          </div>
          <div className='flex flex-col w-[40%] gap-4 justify-center items-center'>
            <div className='flex text-3xl gap-2 items-center justify-center'>
              <div className='flex'>GET Youtube Subscriber</div>
              <NavLink className='flex' to="https://github.com/Vikesh115" target='none'><FaExternalLinkAlt size={20} /></NavLink>
            </div>
            <div className='flex flex-row flex-wrap gap-6'>
              <div className='flex text-black bg-white rounded-2xl p-2'>Rest API</div>
              <div className='flex text-black bg-white rounded-2xl p-2'>Nodejs</div>
              <div className='flex text-black bg-white rounded-2xl p-2'>Express</div>
              <div className='flex text-black bg-white rounded-2xl p-2'>MongoDB</div>
              <div className='flex text-black bg-white rounded-2xl p-2'>POSTMAN</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects