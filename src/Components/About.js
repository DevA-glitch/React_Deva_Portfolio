import React from 'react'

const About = () => {
  return (
    <div className='py-20 bg-gradient-to-b from-stone-100 duration-500 max-md:w-[34.7rem]' name='ABOUT'>
              <h1 className='text-center text-4xl font-bold mt-10'>About Me</h1>
    <p className='text-center mt-4 max-md:w-[29rem]'>
    You will find a little intro about me and the skills and technologies I use daily.</p>
      <div className='px-20 py-5 flex items-center justify-center gap-20 max-md:flex-col '>
        <div className='border-r-2 pr-10'>
        <div className='font-mono text-sm mt-7'>
          <h3 className='text-3xl mb-5'>Want to know me</h3>
            <p className='mb-2 w-[40rem] max-md:w-[25rem]'>I'm a React Frontend Developer whose whole interest is building interactive, accessible, and responsive websites. To create an user friendly web-development. <span className=' font-semibold'>Foucing on improving and adding my skilld related to the field</span></p>
            
            <p className=' w-[40rem] max-md:w-[25rem]'>I'm currently open to Job opportunities where I can contribute to your business and make your users happy. Contact me if you're interested in having a taste of my skills.</p>
            <div className='mt-4'>
              <button className=' bg-cyan-700 text-white px-4 py-1 hover:bg-rose-600 duration-300'>Contact me</button>
            </div>
        </div>
        </div>
        <div className=''>
          <h1 className='text-3xl mb-5'>Skills and Technologies</h1>
          <div className=' mb-5'>
            <ul className='flex items-center gap-5'>
              <li className=' shadow bg-slate-50
               px-4  cursor-pointer py-1'>HTML</li>
              <li className=' shadow bg-slate-50
               px-4  cursor-pointer py-1'>CSS</li>
              <li className=' shadow bg-slate-50
               px-4  cursor-pointer py-1'>Bootstrap</li>
              <li className=' shadow bg-slate-50
               px-4  cursor-pointer py-1'>Tailwind CSS</li>
            </ul>
          </div>
          <div className='mt-3'>
          <ul className='flex item  gap-5'>
              <li className=' shadow bg-slate-50
               px-4  cursor-pointer py-1'>Javascript</li>
              <li className=' shadow bg-slate-50
               px-4  cursor-pointer py-1'>React.js</li>
            </ul>
          </div>
        </div>
    </div>
    </div>
  )
}

export default About