import React from 'react'
import scaler from "./assests/scaler-react.jpg"
import qtree from "./assests/qtree.jpg"
import qtreeone from "./assests/qtreeone.jpg"

export const Certificate = () => {
  return (
    <div className='bg-gray-800 p-10' id="Certificate" style={{ position:"relative"}}>
      <h1 className='text-center p-10 font-black text-lime-400 text-3xl'>Certificates</h1>
      <div className="bg-gray-700 p-10 flex text-white">
        <img src={scaler} alt="img-4" width={200} height={200} />
        <div className='ml-10 flex-1'>
          <h1 className='font-black font-serif text-red-300'><strong>Certificate of Excellence in Scaler Course</strong></h1>
          <p className='mt-5 font-serif text-white'>
            This course recognizes my proficiency in HTML, CSS, JavaScript, and React.js. I have learned the fundamental languages of web development and demonstrated a solid understanding of creating engaging and visually appealing web pages. Throughout the course, I have acquired essential skills such as structuring web content with HTML tags, styling with CSS, and building components in React.js.
          </p>
          <div className='absolute right-24'>
            <a href="https://www.scaler.com/topics/certificates/" target='_blank' rel="noopener noreferrer">
              <button className='bg-lime-500 p-3 rounded-xl hover:bg-red-400 hover:text-black '>Download</button>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 p-14 mt-10 flex text-white" style={{ position: 'relative' }}>
        <img src={qtreeone} alt="img-4" width={200} height={200} />
        <div className='ml-10 flex-1'>
          <h1 className='font-black font-serif text-red-300'><strong>Certificate of Excellence in Scaler Course</strong></h1>
          <p className='mt-5 font-serif text-white'>
            This course recognizes my proficiency in HTML, CSS, JavaScript, and React.js. I have learned the fundamental languages of web development and demonstrated a solid understanding of creating engaging and visually appealing web pages. Throughout the course, I have acquired essential skills such as structuring web content with HTML tags, styling with CSS, and building components in React.js.
          </p>
          <div className='absolute  right-10'>
            <a href={qtree} target='_blank' rel="noopener noreferrer">


              <button className='bg-lime-500 p-3 rounded-xl hover:bg-red-400 hover:text-black '>Download</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
