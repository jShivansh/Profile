import React from 'react'
//import Profile from './Profile.jpg'
import Profile from '../../Images/Profile.jpg'

function Home() {
  return (
    <>
      <div className='p-2 flex flex-wrap items-center justify-center'>
        <div className='p-2 mr-20 mt-10'>
          <p className='pl-8 text-2xl'>Hi, my name is</p>
          <h1 className='pl-2 text-7xl text-orange-600 font-semibold'>Shivansh Joshi</h1>
          <p className='pl-4 mt-6 text-2xl'>Web Developer from Mumbai, India</p>
        </div>
        <div className='p-2 ml-16 mt-10 mb-20'>
          {/* <img src="https://avatars.githubusercontent.com/u/152588072?v=4" alt="" className='p-2 mt-10'/> */}
          <img src={Profile} alt="" className='p-2 w-96 rounded-3xl shadow-2xl'/>
        </div>
      </div>
    </>
  )
}

export default Home
