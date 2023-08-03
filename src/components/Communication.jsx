import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { IoLogoFacebook} from 'react-icons/io'

const Communication = () => {

  const links = [
    {
      id: 1,
      link: (
        <>
          LinkedIn <FaLinkedin size={30} />
          </>
      ),
      href: 'https://www.linkedin.com/in/mahfuzur-rahman-shanto-9368b9221/',
      style: 'rounded-tr-md'

    },
    {
      id: 2,
      link: (
        <>
          GitHub <FaGithub size={30} />
          </>
      ),
      href: 'https://github.com/mahfuz-99',
     

    },
    {
      id: 3,
      link: (
          <>
          Gmail <GrMail size={30}/>
          </>
      ),
      href: 'mailto:mahfuz5846@gmail.com',
     

    },
    {
      id: 4,
      link: (
          <>
          FaceBook <IoLogoFacebook size={30}/>
          </>
      ),
      href: 'https://www.facebook.com/profile.php?id=100011676103827',
      style: 'rounded-br-md'

    },
  ]
  return (
    <div className='hidden lg:flex top-[35%] fixed'>
      <ul>
        {links.map(
          ({id, link, href, style}) => (
            <li key={id} className={'flex w-40 h-10 px-4 bg-gray-800 rounded-full ml-[-100px] hover:ml-[-5px] hover:rounded-full duration-700' + ' ' + style}>

        <a href={href}
        className='flex justify-between items-center w-full text-white font-bold' target='blank'>
          {link}
        </a>

        </li>
          )
        )}
        
      </ul>
     
    </div>
  )
}

export default Communication