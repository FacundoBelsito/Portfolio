import React,{ useEffect, useState} from 'react'
import { GoArrowLeft } from "react-icons/go"
import { RiComputerLine } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { TbAbacus } from "react-icons/tb";
import './Skills.css';


const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills-section');

      if (!skillsSection) return;

      const sectionTop = skillsSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="skills-section" className="bg-black pt-[15rem] pb-[20rem] pl-[10rem]">
      <h1 className="text-white text-[40px] flex items-center gap-x-3">
        SKILLS <GoArrowLeft className={`arrow ${isVisible ? 'animate-horizontal' : ''}`} />
      </h1>
      <h2 className="text-[1.5rem] text-white pt-[2rem] flex items-center gap-x-2">
        Front-end <RiComputerLine />
      </h2>
      <article className="pt-10 w-[100%] flex gap-x-3">
        {/* Front-end skills */}
        {/* HTML5 */}
        <div className={`bg-gray-500 rounded-lg p-6 flex items-center shadow-md w-[10%] flex flex-col slide-in-top${isVisible ? '' : ' hidden'}`}>
          <img className="w-[80%]" src="https://i.postimg.cc/mrNsqCPy/html-5.png" alt="HTML5" />
          <p className="text-white text-lg mt-[1rem]">HTML5</p>
        </div>
        {/* CSS3 */}
        <div className={`bg-gray-500 rounded-lg p-6 flex items-center shadow-md w-[10%] flex flex-col slide-in-top2${isVisible ? '' : ' hidden'}`}>
          <img className="w-[80%]" src="https://i.postimg.cc/HsbK25VY/social.png" alt="CSS3" />
          <p className="text-white text-lg mt-[1rem]">CSS3</p>
        </div>
        {/* JavaScript */}
        <div className={`bg-gray-500 rounded-lg p-6 flex items-center shadow-md w-[10%] flex flex-col slide-in-top3${isVisible ? '' : ' hidden'}`}>
          <img className="w-[80%]" src="https://i.postimg.cc/zB1p32FT/Logo-de-javascript.png" alt="JavaScript" />
          <p className="text-white text-lg mt-[1rem]">JavaScript</p>
        </div>
        {/* ReactJS */}
        <div className={`bg-gray-500 rounded-lg p-6 flex items-center shadow-md w-[10%] flex flex-col slide-in-top4${isVisible ? '' : ' hidden'}`}>
          <img className="w-[80%]" src="https://i.postimg.cc/HxdY3Htn/React-svg.png" alt="ReactJS" />
          <p className="text-white text-lg mt-[1.5rem]">ReactJS</p>
        </div>
        {/* Tailwind */}
        <div className={`bg-gray-500 rounded-lg p-6 flex items-center shadow-md w-[10%] flex flex-col slide-in-top5${isVisible ? '' : ' hidden'}`}>
          <img className="w-[80%]" src="https://i.postimg.cc/1t3tssVT/tailwindcss-logo-icon-167923.png" alt="Tailwind" />
          <p className="text-white text-lg mt-[0.7rem]">Tailwind</p>
        </div>
        {/* Boostrap */}
        <div className={`bg-gray-500 rounded-lg p-6 flex items-center shadow-md w-[10%] flex flex-col slide-in-top6${isVisible ? '' : ' hidden'}`}>
          <img className="w-[80%]" src="https://i.postimg.cc/jjK9WjX8/pixelcut-export.png" alt="Bootstrap" />
          <p className="text-white text-lg mt-[0.7rem]">Bootstrap</p>
        </div>
      </article>

      <h2 className="text-[1.5rem] text-white pt-[2rem] flex items-center gap-x-2">
        Back-end <FaDatabase />
      </h2>
      <article className="pt-10 w-[100%] flex gap-x-3">
        {/* Back-end skills */}
        {/* PHP */}
        <div className={`bg-gray-500 rounded-lg p-6 flex items-center shadow-md w-[10%] flex flex-col slide-in-top${isVisible ? '' : ' hidden'}`}>
          <img className="w-[80%] mt-[2rem]" src="https://i.postimg.cc/9X4NXfqj/php-1.png" alt="PHP" />
          <p className="text-white text-lg mt-[1rem]">PHP</p>
        </div>
        {/* MySQL */}
        <div className={`bg-gray-500 rounded-lg p-6 flex items-center shadow-md w-[10%] flex flex-col slide-in-top2${isVisible ? '' : ' hidden'}`}>
          <img className="w-[80%]" src="https://i.postimg.cc/pr8ZfpDh/Mysql-logo.png" alt="MySQL" />
          <p className="text-white text-lg mt-[1rem]">MySQL</p>
        </div>
        {/* Firebase */}
        <div className={`bg-gray-500 rounded-lg p-6 flex items-center shadow-md w-[10%] flex flex-col slide-in-top3${isVisible ? '' : ' hidden'}`}>
          <img className="w-[80%]" src="https://i.postimg.cc/8cDHbTwZ/logo-firebase-removebg-preview.png" alt="Firebase" />
          <p className="text-white text-lg mt-[1rem]">Firebase</p>
        </div>
      </article>

      <h2 className="text-[1.5rem] text-white pt-[2rem] flex items-center gap-x-2">
        Other technologies <TbAbacus />
      </h2>
      <article className="pt-10 w-[100%] flex gap-x-3">
        {/* Other technologies */}
        {/* GitHub */}
        <div className={`bg-gray-500 rounded-lg p-6 flex items-center shadow-md w-[10%] flex flex-col slide-in-top${isVisible ? '' : ' hidden'}`}>
          <img className="w-[50%] mt-[2rem]" src="https://i.postimg.cc/pVzzB99C/logo-git-hub-va.png" alt="GitHub" />
          <p className="text-white text-lg mt-[1rem]">GitHub</p>
        </div>
        {/* Canva */}
        <div className={`bg-gray-500 rounded-lg p-6 flex items-center shadow-md w-[10%] flex flex-col slide-in-top2${isVisible ? '' : ' hidden'}`}>
          <img className="w-[80%]" src="https://i.postimg.cc/8zK6CM3p/Canva-logo.png" alt="Canva" />
          <p className="text-white text-lg mt-[0.5rem]">Canva</p>
        </div>
        {/* Photoshop */}
        <div className={`bg-gray-500 rounded-lg p-6 flex items-center shadow-md w-[10%] flex flex-col slide-in-top3${isVisible ? '' : ' hidden'}`}>
          <img className="w-[80%]" src="https://i.postimg.cc/vmnZdnwS/Adobe-Photoshop-CC-icon-svg.png" alt="Photoshop" />
          <p className="text-white text-lg mt-[1rem]">Photoshop</p>
        </div>
      </article>
    </div>
  );
};

export default Skills;


