import React from 'react'
import work1 from '../../Images/work-1.jpg'
import work2 from '../../Images/work-2.png'
import work3 from '../../Images/work-3.jpg'

function Work() {
  return (
    <>
      <div>
        <h1 className='text-4xl mt-10  font-bold text-center'>My Work</h1>
        <div>
          <div >
            <div className='flex flex-wrap items-center justify-center m-10 shadow-sm rounded-lg shadow-orange-200'>
              <div className='block max-w-4xl m-4'>
                <h1 className='text-2xl mt-7 ml-28 font-bold'>Drona Kreation Bags</h1>
                <p className='ml-28 mt-2 mr-24 text-base'>e-Commerce website utilizes web development tools and components to create a responsive website showcasing a diverse bag catalogue.</p>
                <a href="https://jshivansh.github.io/DronaKreation/" target='_blank' className='ml-28 mt-2 mr-24 text-base text-blue-400'>Link</a>
              </div>
          
              <div className='block p-5'>
                <img src={work1} alt="" className='p-2 h-80 rounded-full shadow-2xl'/>
              </div>
            </div>

            <div className='flex flex-wrap items-center justify-center m-10 shadow-sm rounded-lg shadow-orange-200'>
              <div className='block p-5'>
                <img src={work2} alt="" className='p-2 h-80 rounded-full shadow-2xl'/>
              </div>
              <div className='block max-w-4xl m-4'>
                <h1 className='text-2xl mt-7 ml-28 font-bold'>WHACK-A-MOLE GAME</h1>
                <p className='ml-28 mt-2 mr-24 text-base'>Developed a browser-based "Whack a Mole" game using HTML, CSS, and JavaScript, employing DOM manipulation for interactive gameplay elements.</p>
                <a href="https://jshivansh.github.io/WhackAMole/" target='_blank' className='ml-28 mt-2 mr-24 text-base text-blue-400'>Link</a>
              </div>
          
            </div>
            <div className='flex flex-wrap items-center justify-center m-10 shadow-sm rounded-lg shadow-orange-200'>
              <div className='block max-w-4xl m-4'>
                <h1 className='text-2xl mt-7 ml-28 font-bold'>Amazon Clone</h1>
                <p className='ml-28 mt-2 mr-24 text-base'>I recreated Amazon's homepage precisely using HTML and CSS, ensuring an accurate visual representation. This project showcases my adeptness in replicating complex layouts and design elements while prioritizing responsiveness and visual fidelity.</p>
                <a href="https://jshivansh.github.io/AmznClone/" target='_blank' className='ml-28 mt-2 mr-24 text-base text-blue-400'>Link</a>
              </div>
          
              <div className='block p-5'>
                <img src={work3} alt="" className='p-2 h-80 rounded-full shadow-2xl'/>
              </div>
            </div>
            <div className='flex flex-wrap items-center justify-center m-10 mb-20 pb-10 shadow-sm rounded-lg shadow-orange-200'>
              <div className='block p-5'>
                <img src='https://cdn.dribbble.com/userupload/3893934/file/original-c91e5bd66978749ff418b53442ce382b.png?resize=400x300' alt="" className='p-2 w-80 rounded-full shadow-2xl'/>
              </div>
              <div className='block max-w-4xl m-4'>
                <h1 className='text-2xl mt-7 ml-28 font-bold'>Portfolio</h1>
                <p className='ml-28 mt-2 mr-24 text-base'>Crafted a dynamic portfolio website using HTML, CSS, and JavaScript. Showcases my projects with seamless navigation, responsive design across devices, and interactive features. Highlights my skills in creating user-centric web solutions.</p>
                <a href="https://jshivansh.github.io/Portfolio" target='_blank' className='ml-28 mt-2 mr-24 text-base text-blue-400'>Link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work
