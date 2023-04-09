import React from 'react'
import Blog from '../Assets/Screenshot (4).png'
import Ecom from '../Assets/Screenshot (5).png'
import Ebook from '../Assets/Screenshot (6).png'
import Invoice from '../Assets/Screenshot (12).png'
import Live from '../Assets/live (1).png'
import Source from '../Assets/commit-git.png'

const Projects = () => {
  return (
    <div className=' px-24 py-14 bg-gradient-to-b from-orange-50 max-md:w-[34.7rem]' name='PROJECT'>
      <h1 className='text-center mt-12 text-4xl font-bold'>Projects</h1>
      <p className='mt-6 mb-8 text-center max-md:w-[20rem]'>These are some of the projects I built to practice and get better at the technologies mentioned above.</p>
      
      <div className='flex justify-center gap-10 max-md:flex-col'>
      <div className='w-[35rem] poj_banner  p-4 bg-white max-md:w-[23rem]'>
        <img className='border border-red-200 hover:p-1 duration-500 cursor-pointer hover:bg-black ' src={Blog} alt='Blog_img' />
        <p className=' mt-4 font-mono text-[.8rem] tracking-wide max-md:text-xs'>
        <span className=' max-md:text-xstext-center mb-2 tracking-widest text-lg font-bold bg-lime-50 text-red-400 p-1 mr-2 max-md:text-xs'>Blog_App:</span>
          Blogging is a fun and flexible way for self-expression and social connection, so it is no wonder blogs have become very popular.</p>
        <p className=' mt-2 font-mono text-[.8rem] tracking-wide max-md:text-xs'>Makes the user to read the magazine without hesitation</p>
        <div className='mt-8 flex gap-5'>
          <button className='px-4 py-1'><a href='https://github.com/DevA-glitch/React_Blog_app' target='_blank'><img className='w-10 h-10 hover:scale-125 duration-300' src={Source} /></a></button>
          <button className='px-4 py-1'><a href='https://amazing-bublanina-022769.netlify.app/' target='_blank'><img className='w-10 h-10 hover:scale-125 duration-300' src={Live} /></a></button>
        </div>
        </div>

        <div className='w-[35rem] poj_banner  p-4 bg-white max-md:w-[23rem]'>
        <img className='border border-red-200 hover:p-1 duration-500 cursor-pointer hover:bg-black ' src={Ecom} alt='Blog_img' />
        <p className=' mt-4 font-mono text-[.8rem] tracking-wide'>
        <span className='text-center mb-2 tracking-widest text-lg font-bold bg-lime-50 text-red-400 p-1 mr-2'>E-Commerce:</span>
        Ecommerce is used to buying and selling of goods electronically online. Its popular because of the many benefits of e-business -internet marketing, electronic funds transfer, mobile commerce</p>
        <p className=' mt-2 font-mono text-[.8rem] tracking-wide'>Here my e-commarce web provies you the smoth and easy access to buy online</p>
        <div className='mt-8 flex gap-8 '>
        <button className='px-4 py-1'><a href='https://github.com/DevA-glitch/React_E-Commerce' target='_blank'><img className='w-10 h-10 hover:scale-125 duration-300' src={Source} /></a></button>
          <button className='px-4 py-1'><a href='https://deva-e-shopping-web.netlify.app/' target='_blank'><img className='w-10 h-10 hover:scale-125 duration-300' src={Live} /></a></button>
        </div>
        </div>

        
      </div>
      <div className='flex justify-center gap-10 mt-10 max-md:flex-col'>
        <div className='w-[35rem] poj_banner  p-4 bg-white max-md:w-[23rem]'>
        <img className='border border-red-200 hover:p-1 duration-500 cursor-pointer hover:bg-black ' src={Ebook} alt='Blog_img' />
        <p className=' mt-4 font-mono tracking-wider text-[.8rem]'>
        <span className='text-center mb-2 tracking-widest text-lg font-bold bg-lime-50 text-red-400 p-1 mr-2'>Travel_Booking:</span>
        A tourism or travel website serves as an information hub for prospective travelers planning a getaway. Today, people travel for a range of experiences—babymoons, staycations, voluntourism or bleisure—you name it. So, provide as much relevant information as possible to help users plan their trips.</p>
        <p className='font-mono tracking-wider text-[.8rem] mt-2'>My website proved the custmore to clear route of your travel plan</p>
        <div className='mt-8 flex gap-8 '>
        <button className='px-4 py-1'><a href='https://github.com/DevA-glitch/React_travel_booking' target='_blank'><img className='w-10 h-10 hover:scale-125 duration-300' src={Source} /></a></button>
          <button className='px-4 py-1'><a href='https://ephemeral-kangaroo-d2c539.netlify.app/' target='_blank'><img className='w-10 h-10 hover:scale-125 duration-300' src={Live} /></a></button>
        </div>
        </div>

        <div className='w-[35rem] poj_banner  p-4 bg-white max-md:w-[23rem]'>
        <img className='border border-red-200 hover:p-1 duration-500 cursor-pointer hover:bg-black ' src={Invoice} alt='Blog_img' />
        <p className=' mt-4 font-mono tracking-wider text-[.8rem]'>
        <span className='text-center mb-2 tracking-widest text-lg font-bold bg-lime-50 text-red-400 p-1 mr-2'>Invoice_Gen:</span>
        Invoice Generator lets you instantly make invoices with our attractive invoice template straight from your web browser. The invoices you make can be sent and paid online or downloaded as a PDF.</p>
        <div className='mt-8 flex gap-8 '>
        <button className='px-4 py-1'><a href='https://github.com/DevA-glitch/React_Invoice_Gen' target='_blank'><img className='w-10 h-10 hover:scale-125 duration-300' src={Source} /></a></button>
          <button className='px-4 py-1'><a href='https://regal-sprinkles-8a0f8f.netlify.app/' target='_blank'><img className='w-10 h-10 hover:scale-125 duration-300' src={Live} /></a></button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Projects