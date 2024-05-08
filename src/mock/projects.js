import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";








const proyectos = [

    {
        id: '1',
        title: 'Tintas Penetrantes',
        link: 'https://chempo.com.ar/tintaspenetrantes/',
        technologies: <FaHtml5 />,
        technologies2:<FaCss3 />, 
        technologies3:<IoLogoJavascript />,
        technologies4:<FaGithub />,
        image:"https://i.postimg.cc/V6t0PLKf/Captura-de-pantalla-2024-04-16-174824.png",
        description:"Proyecto realizado para la empresa Chempo Company de su producto Tintas penetrantes"
    },
    {
        id: '2',
        title: 'Chempo company',
        link: 'https://chempo.com.ar',
        technologies: <FaHtml5 />,
        technologies2:<FaCss3 />,
        technologies3:<IoLogoJavascript />,
        technologies4:<FaGithub />,
        image:"https://i.postimg.cc/8C6db47s/Captura-de-pantalla-2024-04-23-161514.png",
        description:"Pagina web oficial de la empresa Chempo Company"
    },
    {
        id: '3',
        title: 'Ferreteria eNOVA',
        link: '',
        technologies1bis: <FaReact />,
        technologies2:<SiTailwindcss />,
        technologies3:<IoLogoJavascript />,
        technologies5:<IoLogoFirebase />,
        technologies4:<FaGithub />,
        image:"https://i.postimg.cc/zf6HP5RL/Captura-de-pantalla-167.png",
        description:"Proyecto para el curso de ReactJS"
    },
    
]

export const getProjects = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(proyectos)
        }, 500)
    })
}