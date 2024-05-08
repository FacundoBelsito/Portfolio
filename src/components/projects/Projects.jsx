import React from 'react'
import { GoArrowLeft } from "react-icons/go";
import MapProject from './MapProject';
import { useEffect, useState } from "react";
import { getProjects } from '../../mock/projects';





const Projects = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        getProjects()
            .then(response => {
                setProjects(response)
            })
            .catch(error => {
                console.error(error)
            })
    })


    return (
        <div className='bg-white pt-[15rem] pb-[20rem] pl-[10rem]'>
            <h1 className=' text-[40px] flex items-center gap-x-3'>PROJECTS <GoArrowLeft className='arrow animate-horizontal' /> </h1>
            <div className='w-full flex justify-around'>
                <MapProject projects={projects} />
            </div>

        </div>
    )
}

export default Projects
