import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Footer from '../pages/Footer'
import { useSelector } from 'react-redux'

function Main() {

  const {theme} = useSelector(state => state.theme)

  return (
    <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
        <Home/>
        <Projects/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Main