import React, { useEffect, useState } from 'react';
import './AboutMe.css';
import { GoArrowLeft } from "react-icons/go";



const AboutMe = () => {
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const leftElement = document.querySelector('.slide-in-left');
      const rightElement = document.querySelector('.slide-in-right');
      const windowHeight = window.innerHeight;

      if (leftElement.getBoundingClientRect().top < windowHeight - 200) {
        setLeftVisible(true);
      }
      if (rightElement.getBoundingClientRect().top < windowHeight - 200) {
        setRightVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='flex'>
      <div className={`pt-[15rem] pb-[20rem] ml-[10rem] ${leftVisible ? 'slide-in-left' : ''}`}>
        <h1 className='text-[40px] flex items-center gap-x-3'>ABOUT ME <GoArrowLeft className='arrow animate-horizontal' /> </h1>
        <p className='w-[50%] mt-[2rem] text-[18px]'>Hi, i'm Facundo Belsito, a 25 years old Front End Developer from Buenos Aires, Argentina.
          I'm passionate about creating captivating visual interfaces and implementing dynamic user experiences.
          My goal is to merge creativity with functionality to deliver innovative digital solutions.
          My enthusiasm for creating impactful web experiences drives me to blend design and technology to build intuitive and visually appealing interfaces.
          Thank you for taking the time to get to know me through my portfolio!
        </p>
        <button className='rounded-full bg-black text-white w-[20rem] h-[3rem] text-center mt-[2rem] ml-[rem]'>Download CV</button>
      </div>
      <div className={`w-[85%] pt-[15rem] pr-[15rem] ${rightVisible ? 'slide-in-right' : ''}`}>
        <img className='rounded-full object-cover w-[100%] h-[47%]' src="https://i.postimg.cc/J4ddWMpj/Foto-4x4.jpg" alt="" />
      </div>
    </div>
  );
}

export default AboutMe;
