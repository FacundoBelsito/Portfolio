import React from "react"
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    return (

        < div className = 'bg-black h-24    '>
        <nav className='flex items-center justify-between text-white px-6 bg-black w-[100%] fixed z-50  '>
            <div>
               <img className="w-20" src="https://i.postimg.cc/W47MnQCt/Texto.png" alt="" />
            </div>

            <div className="flex justify-center flex-grow ml-[2rem] text-[20px] ">
                <NavLink to='/' className="mx-3">ABOUT ME</NavLink>
                <NavLink to='/' className="mx-3">SKILLS</NavLink>
                <NavLink to='/' className="mx-3">PROJECTS</NavLink>
                <NavLink to='/' className="mx-3">CONTACT</NavLink>
            </div>
        </nav>
    </div >
    



    )
}

export default NavBar