import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Projects from './pages/Projects';
import Main from "./components/Main";
import NavRes from "./components/NavRes";

function App() {
  return (
    <>
    <BrowserRouter>
    <NavRes/>
      <Routes>
        <Route
         path='/'
         element={<Main/>}
        />
        <Route
         path='/project'
         element={<Projects/>}
        />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
