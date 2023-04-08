import React from 'react'
import { AiFillGithub,AiFillLinkedin } from 'react-icons/ai';
import './Home.css'

const Home = () => {
  return (
    <div className='px-20 py-24 flex items-center justify-center gap-10 max-md:flex-row bg-slate-50' name='HOME'>
      <div>
      <div className='font-sans text-4xl tracking-wider mt-[7rem] mb-7 font_nav'>
        <h3 className='text-xl mb-5'>Hi i am <span className='text-3xl text-rose-600'>Devarajan...</span></h3>
        <h1 className=' web_nav mb-5'>Web-Developer</h1>
        <h1 className='mb-1 text-2xl'>Creating thoughtful,</h1>
        <h1 className='text-2xl'>Resposive interfaces.</h1>
      </div>
      <div className='font-mono text-sm mb-7 w-[35rem]'>
        <p className='mb-2'>A passionate frontend developer focused on creating interactive, accessible, and responsive websites. </p>
      </div>
      <div className='flex items-center border-b-2 pb-5'>
        <ul className='flex items-center gap-2 cursor-pointer'>
          <li className=' text-xl'><AiFillGithub /></li>
          <li className=' text-xl'><AiFillLinkedin /></li>
          <li className=' bg-red-600 tracking-wider text-white px-3 py-1 rounded-2xl text-sm hover:bg-slate-300 hover:text-black'>View Projects</li>
        </ul>
      </div>
      </div>
      <div className='w-[35rem] max-md:hidden p-0'>
          <img src='https://www.blessingolaleye.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader.e6e82a4c.svg&w=3840&q=75' />
      </div>
    </div>
  )
}

export default Home



// <p className='mb-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
//         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>