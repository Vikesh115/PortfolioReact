import React from 'react'
import { NavLink } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { project1, project2, skills } from '../shared/data';

function Projects() {
  return (
    <div className='flex w-[100%] items-center  '>
      <div className='flex flex-col flex-wrap  items-center gap-2 md:gap-8 w-[100%]  p-4'>

        <span className='flex font-bold text-2xl md:pt-20'>Projects</span>

        <div className='flex w-[90%] flex-wrap md:flex-nowrap  justify-center '>
          <div className='flex '>
            <img src="https://images.pexels.com/photos/7991486/pexels-photo-7991486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="food" className='flex md:rounded-l-lg'/>
          </div>
          <div className='flex  flex-col bg-white text-black w-[100%] md:w-[100%] gap-2 justify-center items-center md:rounded-r-lg'>
            <span className='flex text-xl gap-2 items-center justify-center'>
              <span className='flex text-2xl'>Movie APP</span>
              <span className='flex'><NavLink to="https://github.com/Vikesh115/MovieApp-Frontend" target='none'><FaExternalLinkAlt size={20} /></NavLink></span>
            </span>
            <div className='flex flex-row flex-wrap gap-2 md:gap-6 justify-center p-1'>
              {skills.map((skill) => (
                <span key={skill.id} className='flex font-semibold  rounded-md p-2 items-center justify-center'>{skill.name}</span>
              ))}
            </div>
          </div>
        </div>

        <div className='flex w-[90%] md:flex-nowrap flex-wrap-reverse justify-center'>
          <div className='flex md:rounded-l-lg bg-white text-black flex-col w-[100%] md:w-[100%] gap-2 justify-center items-center'>
            <span className='flex text-xl gap-2 items-center justify-center'>
              <span className='flex text-2xl'>Hotel APP</span>
              <NavLink className='flex' to="https://github.com/Vikesh115/Hotel-Booking-Website" target='none'><FaExternalLinkAlt size={20} /></NavLink>
            </span>
            <span className='flex md:flex-row flex-wrap gap-2 md:gap-6 justify-center p-1'>
              {project1.map((skill) => (
                <span key={skill.id} className='flex  font-semibold  rounded-md p-2  items-center justify-center'>{skill.name}</span>
              ))}
            </span>
          </div>
          <div className='flex md:rounded'>
            <img src="https://images.pexels.com/photos/172872/pexels-photo-172872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="food" className='flex md:rounded-r-lg' />
          </div>
        </div>

        <div className='flex w-[90%] flex-wrap md:flex-nowrap  justify-center '>
          <div className='flex '>
            <img src="https://images.pexels.com/photos/16587507/pexels-photo-16587507/free-photo-of-youtube-music-stream-songs-and-music-videos-app-on-the-display-of-smartphone-or-tablet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="food" className='flex md:rounded-l-lg'/>
          </div>
          <div className='flex  flex-col bg-white text-black w-[100%] md:w-[100%] gap-2 justify-center items-center md:rounded-r-lg'>
            <span className='flex text-xl gap-2 items-center justify-center'>
              <span className='flex text-2xl'>Youtube API</span>
              <span className='flex'><NavLink to="https://github.com/Vikesh115/Youtube-Subscribers-Project" target='none'><FaExternalLinkAlt size={20} /></NavLink></span>
            </span>
            <div className='flex flex-row flex-wrap gap-2 md:gap-6 justify-center p-1'>
              {project2.map((skill) => (
                <span key={skill.id} className='flex  font-semibold  rounded-md p-2 items-center justify-center'>{skill.name}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects
