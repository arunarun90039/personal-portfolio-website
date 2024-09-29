import React from 'react'

export const Header = () => {
  return (
    <div className=''>
    <header className='flex justify-between items-center w-full h-200 p-5 bg-gray-800 text-white fixed top-0 z-40'>
      <div  className='text-3xl ml-10 text-lime-500 font-serif font-black '><a href="/">Arun</a></div>
      <nav className='flex-1 flex justify-center font-serif font-black'>
        <ul className='flex gap-20 text-xl li:hover:text-slate-900'>
          <li ><a href="#Home" className='hover:text-bg-gradient-to-r'>Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#Certificate">Certificates</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
      </nav>
      <button className='mr-10  p-2 rounded-lg text-white bg-red-500 font-serif font-black hover:bg-purple-900 border-3 border-black'>Hire me</button>
    </header>
    </div>
  )
}
