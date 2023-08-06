import React from 'react'

const Contact = () => {
  return (
    <div name='contact' 
    className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-700 text-white'> 
      <div className='flex flex-col p-20 mx-auto max-w-screen-lg w-full'>
        <div className='pb-10'> 
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
          <p className='py-6'>Submit the form below to get with me</p>
        </div>

        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/63165714-6773-434c-ac5f-916443bd5542" method="POST" className='flex flex-col w-full md:w-1/2'>
            <input type="text" 
            name="name" 
            placeholder='Enter your name'
            className='bg-transparent p-2 border-2 rounded-md text-white focus:outline-none'
            />
            <input type="text" 
            name="mail" 
            placeholder='Enter your email'
            className='my-4 bg-transparent p-2 border-2 rounded-md text-white focus:outline-none'
            />
            <textarea name="message" 
            placeholder='Enter your message' cols="30" rows="10"
            className='bg-transparent p-2 border-2 rounded-md text-white focus:outline-none'></textarea>

            <button className='text-white px-6 py-3 my-8 mx-auto flex items-center hover:scale-110 duration-700 rounded-2xl bg-gradient-to-r from-cyan-900 to-blue-600 font-bold'>Let's talk with me</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact