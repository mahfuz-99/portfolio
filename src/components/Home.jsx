import React from 'react'
import shanto from '../assets/shanto.png'
import {RiArrowRightDoubleLine} from 'react-icons/ri'

const Home = () => {
  return (
    <div name='home' 
    className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-700'>
      <div className='flex flex-col items-center justify-center h-full px-5 mx-auto max-w-screen-lg md:flex-row'>
        <div>
          <h2 className='text-white sm:text-7xl font-bold'>I'm a Full Stack Developer</h2>

          <p className='text-blue-100 py-5 max-w-lg'>
            I've 1 year of experience web application software.
            Currently, I love to work on web application using technologies like 
            ReactJS, Tailwind CSS, NextJS and NodeJS. 
          </p>

          <div>
            <button className='text-white font-bold px-6 py-3 my-6 flex items-center rounded-md bg-gradient-to-r from-slate-900 to-blue-600'>
              Portfolio
              <span className='ml-2'>
              <RiArrowRightDoubleLine size={25}/>
              </span>
            </button>
          </div>
        </div>

        <div>
          <img src={shanto} alt=""   
           className='rounded-2xl mx-auto 
           md:w-full'/>
        </div>
      </div>
    </div>
  )
}

export default Home