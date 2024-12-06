import React from 'react'
import { FaReact, FaJs, FaHtml5, FaCss3, FaGit, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiReactrouter } from "react-icons/si";

function About() {
  return (
    <div className='flex w-[100%] justify-center items-center bg-white'>
      <div className='flex flex-col flex-wrap justify-center items-center w-[90%] bg-black text-white p-8'>
        <div className='flex text-white justify-center items-center text-2xl'>Skills</div>
        <div className='flex flex-row flex-wrap gap-4 justify-center items-center p-8 w-[30%]'>
          <div className='flex gap-1'>
            <div><FaJs size={24} /></div>
            <div>Javascript</div>
          </div>
          <div className='flex gap-1'>
            <div><FaReact size={24} /></div>
            <div>React</div>
          </div>
          <div className='flex gap-1'>
            <div><FaHtml5 size={24} /></div>
            <div>Html</div>
          </div>
          <div className='flex gap-1'>
            <div><FaCss3 size={24} /></div>
            <div>Css</div>
          </div>
          <div className='flex gap-1'>
            <div><FaGit size={24} /></div>
            <div>Git</div>
          </div>
          <div className='flex gap-1'>
            <div><FaNodeJs size={24} /></div>
            <div>NodeJS</div>
          </div>
          <div className='flex gap-1'>
            <div><SiExpress size={24} /></div>
            <div>ExpressJS</div>
          </div>
          <div className='flex gap-1'>
            <div><SiMongodb size={24} /></div>
            <div>MongoDB</div>
          </div>
          <div className='flex gap-1'>
            <div><SiReactrouter size={24} /></div>
            <div>react-router-dom</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About