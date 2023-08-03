import React from 'react'

const About = () => {
  return (
    <div name='about' 
    className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-700 text-white'>
      <div className='flex flex-col justify-center h-full w-full p-4 mx-auto max-w-screen-lg'>
        <div className='pb-20'>
        <p className='text-white sm:text-5xl font-bold'>
          About
        </p>
        </div>

        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsam assumenda quod explicabo sint sed soluta cupiditate aut libero illo, sequi error sit. Debitis earum voluptas tenetur cum, blanditiis natus molestias aliquid doloremque iusto voluptatum enim beatae consectetur omnis ut?
        </p>
        <br />

        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veniam autem ab hic quod rem, praesentium pariatur tempore! Totam, incidunt delectus sapiente cupiditate excepturi corporis earum culpa ratione nostrum similique recusandae sequi facilis quidem corrupti in harum aut quibusdam repudiandae.
        </p>
      </div>
    </div>
  )
}

export default About