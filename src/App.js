import './App.css'
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Inicio from './components/inicio/Inicio';
import AboutMe from './components/aboutme/AboutMe';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>

      <Inicio/>
      <AboutMe/>
      <Skills/>
      <Projects/>
    
    </div>
    
  )
}

export default App;
