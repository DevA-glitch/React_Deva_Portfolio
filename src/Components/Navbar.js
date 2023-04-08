import React from 'react'
import sign from '../Assets/signature.png'
import { Link } from 'react-scroll'
import links from '../link'

const Navbar = () => {
  return (
    <div className='flex justify-between px-5 py-1 bg-slate-50 w-full fixed shadow'>
        <div><img src={sign} alt='Logo' className='w-50 h-20' /></div>
        <div className='flex items-center'>
        <ul className="hidden md:flex mt-3 ">
        {links.map(({ id, link }) => (
          <li
            className="px-4 cursor-pointer font-mono  text-sm  capitalize font-medium text-black hover:scale-105 duration-200"
            key={id}
          >
            <Link to={link} activeClass="active" smooth duration={400} className=' duration-500'>
              {link}
              {console.log(id, link)}
            </Link>
          </li>
        ))}
      </ul>
        </div>
    </div>
  )
}

export default Navbar