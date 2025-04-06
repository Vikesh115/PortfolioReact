import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './pages/About';
import Projects from './pages/Projects';
import Main from "./components/Main";
import NavRes from "./components/NavRes";
import { useState } from "react";

function App() {

  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
}

  return (
    <>
      <BrowserRouter>
        <NavRes toggleTheme={toggleTheme} theme={theme}/>
        <Routes>
          <Route
            path='/'
            element={<Main theme={theme}/>}
          />
          <Route
            path='/project'
            element={<Projects />}
          />
          <Route
            path='/about'
            element={<About />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
