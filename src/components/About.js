import React from 'react'
import about from "./assests/aboutimg.png"

export const About = () => {
  return (
    <div className='bg-gray-800 h-full' id='About'> 
        <div className='flex flex-col items-center'>
            <h1 className='text-center font-black text-lime-500 font-serif p-30 text-3xl m-8'>About me</h1>
            <div className='flex flex-row justify-between items-start p-10'>
                <div className='max-w-xl '>
                    <h1 className='font-black text-lime-500 font-serif text-3xl m-10 '>Front End Developer</h1>
                    <p className='text-lg leading-8 tracking-wide text-white '>
                      Hi, I'm Arun, a passionate front-end developer eager to begin my professional journey in web development. 
                      With a strong foundation in HTML, CSS, and JavaScript, I've honed my skills through various projects that 
                      reflect my ability to create responsive and user-friendly interfaces. As a fresher, I am committed to 
                      continuous learning and excited to contribute to innovative teams where I can apply my knowledge and grow. 
                      I am seeking opportunities to kickstart my career, where I can collaborate with experienced professionals, 
                      take on challenges, and make a meaningful impact.
                    </p>
                </div>
                <img src={about} alt="img-2" width={800} height={800} className='ml-32 m-20 hover:' />
            </div>
        </div>
    </div>
  )
}
