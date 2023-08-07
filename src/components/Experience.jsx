import React from 'react'
import cpp from '../assets/cpp.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import java from '../assets/java.png'
import laravel from '../assets/laravel.png'
import php from '../assets/php.png'
import python from '../assets/python.png'
import sql from '../assets/sql.png'
import tailwind from '../assets/tailwind.png'


const Experience = () => {

  const technologies = [
    {
      id: 1,
      source: react,
      title: 'React',
      style: 'shadow-sky-500'
    },
    {
      id: 2,
      source: js,
      title: 'JS',
      style: 'shadow-yellow-500'
   
    },
    {
      id: 3,
      source: tailwind,
      title: 'Tailwind CSS',
      style: 'shadow-sky-500'
      
    },
    {
      id: 4,
      source: laravel,
      title: 'Laravel',
      style: 'shadow-red-500'
    },
    {
      id: 5,
      source: php,
      title: 'PHP',
      style: 'shadow-white'
    },
    {
      id: 6,
      source: python,
      title: 'Python',
      style: 'shadow-yellow-500'
    },
    {
      id: 7,
      source: sql,
      title: 'MySql',
      style: 'shadow-sky-500'
    },
    
    {
      id: 8,
      source: cpp,
      title: 'C++',
      style: 'shadow-blue-500'
    },
    {
      id: 9,
      source: java,
      title: 'Java',
      style: 'shadow-yellow-500'
    },
  ]
  return (
    <div name='experience' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-700'>
      <div className='max-w-screen-lg mx-auto p-2 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 p-0 inline border-gray-500'>Experience</p>
          <p className='py-6'>Languages and frameworks I've worked with</p>
        </div>

        <div className=' gap-10 w-full grid grid-cols-3 sm:grid-cols-3 text-center py-2 px-6 sm:px-0'>

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