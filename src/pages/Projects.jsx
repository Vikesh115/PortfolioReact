import React from 'react'
import { NavLink } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { project1, project2 } from '../shared/data';

function Projects() {
  return (
    <div className='flex w-[100%]  items-center '>
      <div className='flex flex-col flex-wrap  items-center gap-2 md:gap-8 w-[100%] bg-black p-4'>

        <span className='flex font-bold text-2xl text-white md:pt-20'>Projects</span>

        <div className='flex w-[90%] md:flex-nowrap flex-wrap-reverse justify-center'>
          <div className='flex md:rounded-l-lg bg-white flex-col w-[100%] md:w-[100%] gap-2 justify-center items-center'>
            <span className='flex text-xl gap-2 items-center justify-center'>
              <span className='flex text-2xl'>Food delivery app</span>
              <NavLink className='flex' to="https://github.com/Vikesh115/FoodAppFrontend" target='none'><FaExternalLinkAlt size={20} /></NavLink>
            </span>
            <span className='flex md:flex-row flex-wrap gap-2 md:gap-6 justify-center p-1'>
              {project1.map((skill) => (
                <span key={skill.id} className='flex text-black font-semibold bg-white rounded-md p-2  items-center justify-center'>{skill.name}</span>
              ))}
            </span>
          </div>
          <div className='flex md:rounded'>
            <img src="https://images.pexels.com/photos/29306497/pexels-photo-29306497/free-photo-of-delicious-doner-kebab-with-fries-and-cola.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="food" className='flex md:rounded-r-lg' />
          </div>
        </div>

        <div className='flex w-[90%] flex-wrap md:flex-nowrap  justify-center '>
          <div className='flex '>
            <img src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="food" className='flex md:rounded-l-lg'/>
          </div>
          <div className='flex bg-white flex-col w-[100%] md:w-[100%] gap-2 justify-center items-center md:rounded-r-lg'>
            <span className='flex text-xl gap-2 items-center justify-center'>
              <span className='flex text-2xl'>GET Youtube Subscriber</span>
              <span className='flex'><NavLink to="https://github.com/Vikesh115/Youtube-Subscribers-Project" target='none'><FaExternalLinkAlt size={20} /></NavLink></span>
            </span>
            <div className='flex flex-row flex-wrap gap-2 md:gap-6 justify-center p-1'>
              {project2.map((skill) => (
                <span key={skill.id} className='flex text-black font-semibold bg-white rounded-md p-2 items-center justify-center'>{skill.name}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects
