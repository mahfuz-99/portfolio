import React from 'react'
import css from '../assets/css.png'
import github from '../assets/github.png'
import html from '../assets/html.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'

const Experience = () => {

  const technologies = [
    {
      id: 1,
      source: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      source: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      source: js,
      title: 'JS',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      source: github,
      title: 'GitHub',
      style: 'shadow-white'
    },
    
    {
      id: 5,
      source: react,
      title: 'React',
      style: 'shadow-sky-500'
    },
    {
      id: 6,
      source: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-500'
    },
  ]
  return (
    <div name='experience' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-700'>
      <div className='max-w-screen-lg mx-auto p-2 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 p-0 inline border-gray-500'>Experience</p>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>

        <div className=' gap-20 w-full grid grid-cols-2 sm:grid-cols-3 text-center py-8 px-12 sm:px-0'>

          {
            technologies.map(({id, source, title, style}) => (
              <div  className={'shadow-lg hover:scale-125 duration-600 py-2 rounded-lg' + ' ' + style} >
            <img src={source} alt="" className='mx-auto w-20'/>
            <p className='mt-4'>{title}</p>
          </div>
            ))
          }
          
        </div>
      </div>
    </div>
  )
}

export default Experience