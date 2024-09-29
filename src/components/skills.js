import React from 'react';
import html from "./assests/html (2).png";
import css from "./assests/css.png";
import js from "./assests/js.png";
import reactjs from "./assests/reactjs (2).png";
import github from "./assests/github.png";

export const Skills = () => {
  return (
        <div className='bg-gray-800 text-white p-8 'id='skills'>
          <h1 className='text-center font-black text-lime-500 font-serif text-3xl mb-8 '>Skills</h1>
          <div className='flex flex-nowrap justify-evenly '>
            <div className=' p-5  text-3xl transition-transform duration-300 ease-in-out hover:scale-110 '>
              <img src={html} alt="HTML" />
            </div>
            <div className=' p-5 text-3xl transition-transform duration-300 ease-in-out hover:scale-110'>
              <img src={css}   alt="CSS"  />
            </div>
            <div className='  p-6 text-3xl transition-transform duration-300 ease-in-out hover:scale-110'>
              <img src={js}  alt="JavaScript" />
            </div>
            <div className=' p-6 text-3xl transition-transform duration-300 ease-in-out hover:scale-110'>
              <img src={reactjs} alt="ReactJS" />
            </div>
            <div className='text-5xl m-10 bg-white transition-transform duration-500 ease-in-out hover:scale-150'>
              <img src={github} w alt="GitHub" />
            </div>
          </div>
        </div>
      );
    }

    
  

