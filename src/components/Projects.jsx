import React from 'react'
import Project_200 from '../assets/Project_200.png'
import ML_Project from '../assets/ML_Project.jpg'
import Project_300 from '../assets/Project_300.PNG'

const Projects = () => {

  const project = [
    {
      id: 1,
      source: Project_200
    },
    
    {
      id: 2,
      source: ML_Project
    },
    {
      id: 3,
      source: Project_300
    },
    

  ]
  return (
    <div name='projects' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-700 text-white'>

     <div className='flex flex-col justify-center w-full h-full px-5 mx-auto max-w-screen-lg'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
        <p className='py-6'>Check out some of work</p>
      </div>

     <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
     {
       project.map(({id, source}) => (
        <div className='shadow-md shadow-gray-600 rounded-lg'>
        <img src={source} alt="" className='rounded-md duration-200 hover:scale-110' />

        <div className='flex items-center justify-center'>
          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110 font-bold'>Github</button>
          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110 font-bold'>Live Project</button>
        </div>
      </div>
       ))
     } 
     
     </div>
     </div>
    </div>
  )
}

export default Projects