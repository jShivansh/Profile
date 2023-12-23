import React from 'react'
import Profile from '../Images/Profile1.png'

function Pamplet() {
  return (
    <div>
      <div className='flex flex-wrap items-center justify-center m-10'>
              <div className='block max-w-4xl m-4'>
                <h1 className='text-3xl mt-7 ml-28 font-bold'>About Me</h1>
                <p className='ml-28 mt-2 mr-24 text-lg'>I'm a Computer Science Engineer passionate about problem-solving and learning. I thrive on analyzing challenges and creating innovative solutions. Beyond technology, I enjoy football, chess, traveling and constantly seeking new experiences. Let's connect and explore opportunities together!</p>
              </div>
          
              <div className='block'>
                <img src={Profile} alt="" className='p-2 w-96 rounded-full shadow-2xl'/>
              </div>
            </div>
    </div>
  )
}

export default Pamplet
