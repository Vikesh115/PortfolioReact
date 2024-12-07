import React from 'react'
import { FaReact, FaJs, FaHtml5, FaCss3, FaGit, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiReactrouter } from "react-icons/si";

function About() {
  return (
    <div className='flex w-[100%] justify-center items-center bg-white'>
      <div className='flex flex-col flex-wrap justify-center items-center w-[90%] bg-black text-white p-8'>
        <span className='flex text-white justify-center items-center text-2xl'>Skills</span>
        <div className='flex flex-row flex-wrap gap-4 justify-center items-center p-8 w-[80%]'>
          <div className='flex gap-1'>
            <span><FaJs size={24} /></span>
            <span>Javascript</span>
          </div>
          <div className='flex gap-1'>
            <span><FaReact size={24} /></span>
            <span>React</span>
          </div>
          <div className='flex gap-1'>
            <span><FaHtml5 size={24} /></span>
            <span>Html</span>
          </div>
          <div className='flex gap-1'>
            <span><FaCss3 size={24} /></span>
            <span>Css</span>
          </div>
          <div className='flex gap-1'>
            <span><FaGit size={24} /></span>
            <span>Git</span>
          </div>
          <div className='flex gap-1'>
            <span><FaNodeJs size={24} /></span>
            <span>NodeJS</span>
          </div>
          <div className='flex gap-1'>
            <span><SiExpress size={24} /></span>
            <span>ExpressJS</span>
          </div>
          <div className='flex gap-1'>
            <span><SiMongodb size={24} /></span>
            <span>MongoDB</span>
          </div>
          <div className='flex gap-1'>
            <span><SiReactrouter size={24} /></span>
            <span>react-router-dom</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About