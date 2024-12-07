import React from 'react'
import { skills } from '../shared/data';

function AboutTest() {
  return (
    <div className='flex w-[100%] justify-center items-center bg-white'>
      <div className='flex flex-col flex-wrap justify-center items-center w-[90%] bg-black text-white p-2 md:p-8'>
        <span className='flex text-white justify-center items-center text-2xl'>Skills</span>
        <div className='flex flex-row flex-wrap gap-2 md:gap-4 justify-center items-center p-2 md:p-8 w-[90%] md:w-[50%]'>
          
        {skills.map((skill)=>(
            <div className='flex gap-1' key={skill.id}>
            <span><skill.logo size={24}/></span>
            <span>{skill.name}</span>
          </div>
        ))}

        </div>
      </div>
    </div>
  )
}

export default AboutTest