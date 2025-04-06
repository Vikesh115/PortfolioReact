import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Footer from '../pages/Footer'
function Main({theme}) {
  return (
    <div className={`min-h-screen duration-300 ${theme === 'light'
      ? 'bg-white text-black'
      : 'bg-black text-white'
      }`}>
        <Home/>
        <Projects/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Main