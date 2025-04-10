import React from 'react'
import { useSelector } from 'react-redux'

function AboutTest() {

  const {theme} = useSelector(state => state.theme)

  return (
    <div className={`md:flex  w-[100%] gap-3 justify-center items-center md:h-screen ${theme === 'light'
      ? 'bg-white text-black'
      : 'bg-black text-white'
      }`}>
      <div className="flex justify-center md:pt-5 md:mt-0 md:w-[40%] w-[100%]">
        <div className="flex flex-col flex-wrap  font-bold p-4 md:rounded-lg shadow-2xl w-[100%]">
          <div className='flex justify-center font-bold text-2xl'>About ME</div>
          <div className='flex pt-10'>
            Web Developer with expertise of React.js, Redux, HTML and CSS. currently learning Full stack development.
          </div>
          <div className='flex py-10'>
            I am passionate programmer and a learner, born and brought up in India.Currently, I am enrolled in Full satck Web Development Program by Almabetter.
            I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
          </div>
        </div>
      </div>
      <div className='flex md:w-[40%] w-[100%] justify-center'>
        <img src="https://assets-v2.lottiefiles.com/a/c3a6dd4c-117e-11ee-9c3a-7f367549e774/a9hBSeOLNx.gif" alt="" className='flex md:rounded-2xl' />
      </div>
    </div>
  )
}

export default AboutTest