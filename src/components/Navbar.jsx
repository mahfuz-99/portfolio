import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
const Navbar = () => {

  const [nav, setnav] = useState(false)
  const links = [
  {
    id: 1,
    link: 'home'
  },
  {
    id: 2,
    link: 'projects'
  },
  {
    id: 3,
    link: 'experience'
  },
  {
    id: 4,
    link: 'contact'
  },

]
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-blue-100 bg-black fixed'>
    <div><h1 className='text-5xl font-signature ml-2'>Portfolio</h1>
    </div>
  

    <ul className='hidden md:flex'>
      {links.map(({id, link}) => (
        <li key={id} className='px-4 cursor-pointer capitalize font-medium text-blue-100
        hover:scale-105 duration-300'>
          {link}
        </li>
      )
      )}

    </ul>
        
        <div 
         onClick={() => setnav(!nav)}
         className='cursor-pointer pr-5 z-20 text-blue-100 md:hidden'> 
         {nav ? <FaTimes size={25} /> : <FaBars size={25} />} </div>

        {nav && (
          <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-700 text-gray-400'>

          {links.map(({id, link}) => (
          <li key={id} className='px-5 cursor-pointer capitalize py-5 text-5xl'>
            {link}
          </li>
        )
        )}
           
          
          </ul>
        )}


    </div>
    
  )
}

export default Navbar