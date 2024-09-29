import React from 'react';
import projectOne from "./assests/projectOne.png";
import projectTwo from "./assests/projectTwo (2).png";

export const Project = () => {
  return (
    <div className='w-full h-full bg-gray-800' id='project'>
        <h1 className='text-center font-bold text-3xl p-16 text-lime-400'>Projects</h1>
        <div className='grid grid-cols-2 gap-10 justify-items-center items-center'>
            <div className='relative group'>
                <a href="https://github.com/arunarun90039/Movie-Database-Project-1" className='block'>
                    <div className='relative'>
                        <img src={projectOne} width={400} height={300} alt="projectOne" className='object-cover'/>
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 flex justify-center items-center transition-opacity duration-300">
                            <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100">Visit</span>
                        </div>
                    </div>
                </a>
                <h2 className='text-center text-white mt-2'>Movie-Database Project-1</h2>
            </div>
            <div className='relative group'>
                <a href="https://github.com/arunarun90039/Movie-Database-Project-1" className='block'>
                    <div className='relative'>
                        <img src={projectTwo} width={400} height={300} alt="projectTwo" className='object-cover'/>
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 flex justify-center items-center transition-opacity duration-300">
                            <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100">Visit</span>
                        </div>
                    </div>
                </a>
                <h2 className='text-center text-white mt-2'>Movie-Database Project-2</h2>
            </div>
        </div>
    </div>
  )
} 
