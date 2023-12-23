import React from 'react'
import Profile from '../../Images/Profile1.png'

function About() {
  return (
    <>
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

        <div className='p-1 flex flex-wrap items-center justify-center my-20'>
          <div class="block max-w-md p-6 bg-orange-300 border border-gray-200 rounded-lg shadow hover:bg-gray-100 m-4">
            <h2 class="my-2 py-2 text-3xl font-bold tracking-tight text-gray-900  text-center">Education</h2>
            <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 ">SRM University</h5>
            <p class="font-normal text-gray-700  pb-4">B.Tech Computer Science [2014-2018]</p>
            <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 ">Kendriya Vidyalaya</h5>
            <p class="font-normal text-gray-700  mb-4">Senior Secondary (XII) [2014]</p>
          </div>
          <div class="block max-w-sm p-6 bg-orange-300 border border-gray-200 rounded-lg shadow hover:bg-gray-100 m-4 mx-10">
            <h2 class="my-2 py-2 text-3xl font-bold tracking-tight text-gray-900  text-center">Experience</h2>
            <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 ">L&T Infotech</h5>
            <p class="font-normal text-gray-700  pb-4">Software Engineer [Aug 2018 - Dec 2019]</p>
            <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 ">College Pond</h5>
            <p class="font-normal text-gray-700  mb-4">Intern [2017]</p>
          </div>
          <div class="block max-w-sm p-6 bg-orange-300 border border-gray-200 rounded-lg shadow hover:bg-gray-100 m-4">
            <h2 class="my-2 py-2 text-3xl font-bold tracking-tight text-gray-900  text-center">Technical Stack</h2>
            <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 ">Web Development</h5>
            <p class="font-normal text-gray-700  pb-4">JavaScript, HTML, CSS, React, Tailwind</p>
            <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 ">Others</h5>
            <p class="font-normal text-gray-700  mb-4">Java, Python, C/C++</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About


//block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700
