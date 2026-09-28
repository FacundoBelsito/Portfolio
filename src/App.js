import './App.css';
import { LanguageProvider } from './i18n/LanguageContext';
import NavBar from './components/navbar/NavBar';
import Inicio from './components/inicio/Inicio';
import AboutMe from './components/aboutme/AboutMe';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <NavBar />
        <main>
          <Inicio />
          <AboutMe />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
