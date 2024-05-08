import React from 'react'
import './Inicio.css'


const Inicio = () => {
  return (
    <div className='bg-black h-[90vh] contenedor'>

      <div className='flex justify-end mr-72 items-center pt-[5rem] '>
        <div className='ml-[20rem] w-[70%] slide-in-left'>
          <p className='animate-bounce  text-white border-[blue-400] rounded-[6px] w-[8rem] flex justify-center items-center h-[2rem] bg-cyan-600'>¡Welcome!</p>
          <h1 className='  text-[#17E1F7] text-[2.3rem] '>Facundo Belsito </h1>
          <div className='flex gap-x-[3rem] '>
           <a  target="_blank" href='https://github.com/FacundoBelsito'><img className='w-[3rem]' src="https://i.postimg.cc/R0wh0DBm/Github-icono.png" alt="Mi Imagen" /></a> 
           <a  target="_blank" href='https://www.linkedin.com/in/facundo-yoel-belsito-echag%C3%BCe-a98459264/'><img className='w-[3rem]' src="https://i.postimg.cc/mZVxQfND/Logo-linkedin-editado.png" alt="Mi Imagen" /></a>
           <a  target="_blank" href='mailto:facundo.belsito98@gmail.com'><img className='w-[2rem] mt-[0.7rem]' src="https://i.postimg.cc/pV15CB8t/Logo-sobre.png" alt="Mi Imagen" /></a>
          </div>
          <button className="slide-in-left rounded-full bg-black text-white border border-[#17E1F7] flex items-center justify-center px-20 mt-[2rem] py-2">About me</button>
        </div>
        <img className='slide-in-right w-[50%]' src="https://i.postimg.cc/sXXx3Ps4/gif-front-end.gif" alt="" />

      </div>
    </div>
  )
}

export default Inicio





