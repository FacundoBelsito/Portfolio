import React from 'react'


const CardComponent = ({ title, link, technologies, technologies2, technologies3, technologies4, technologies5,technologies1bis, image, description }) => {
    return (
        <div>

            <article className="w-[80%] border border-black mt-[2rem] rounded-lg p-4">
                <div className="flex flex-col-reverse gap-y-9">
                    <div className="mt-[1rem]">
                        <h1 className="text-[25px] text-cyan-700">TITLE: <span className='text-[17px] text-black'>{title}</span></h1>
                        <h1 className="text-[25px] text-cyan-700 mt-[2rem]">LINK: <span className='text-[17px] text-black'> {link}</span></h1>
                        <h1 className="flex items-center gap-x-2 text-[25px] mt-[2rem] text-cyan-700">TECHNOLOGIES: <span className='text-black flex justify-around w-[29%]'> <span className='text-orange-700'>{technologies}</span> <span className='text-cyan-500'>{technologies1bis}</span> <span className='text-blue-500'>{technologies2}</span> <span className='text-yellow-500'> {technologies3}</span> {technologies4} <span className='text-orange-400'>{technologies5}</span></span></h1>
                    </div>
                    <div className="mt-[0.3rem]">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img className="w-[90%]" src={image} alt="Tintas penetrantes" />
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2">{title}</h2>
                                <p className="text-sm text-gray-700">{description}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </article>



        </div>
    )
}

export default CardComponent
