import React from 'react'
import fds from "./assests/fds-image.png"

export const Intro = () => {
  return (
    <div className='w-full bg-gray-800  h-200 pt-28 flex justify-center items-center  ' id="Home">
      <div className='text-white font-serif font-thin text-3xl flex flex-row items-center'>
        <div className='m-40'>
          <h1 className='text-lime-500  mb-5 ml-40 font font-black'>Hi,I am Arun</h1>
          <p className='text-lg max-w-lg leading-10 tracking-wide mb-42'>
          I'm a forward-thinking front-end developer with a strong foundation in web development. My key skills include HTML, CSS, Tailwind CSS, JavaScript, React, and Github. I'm eager to apply my knowledge and grow in a professional environment. </p>
         
        </div>
        <div className='ml-20 '>
          <img src={fds} className='object-contain w-96' alt="fds" />
        </div>
      </div>
    </div>
  )
}
