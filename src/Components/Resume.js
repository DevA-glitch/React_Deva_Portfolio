import React from 'react'
import File from '../Assets/file.png'
import CV from '../Assets/arun_resume.pdf'

const Resume = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                 <img className='w-6 h-6' src={File} />
                </>
            ),
            href: 'CV',
            style: 'rounded'
        },
    ]
  return (
    <div className='lg-flex flex-col fixed bottom-16 right-10'>
        <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className='bg-red-600 border-[2px] shadow-2xl border-b-black py-4 px-4 rounded-full cursor-pointer hover:bg-cyan-700 duration-300'
          >
            {/* default custom style  */}
            <a
              href={CV}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Resume

{/* <ul>
            {links.map(({id,child,href,style}) => (
                <li key={id} className=' bg-red-600 border-[2px] shadow-2xl border-b-black py-4 px-4 rounded-full cursor-pointer hover:bg-cyan-700 duration-300'>
                    <a onClick={href}>{child}</a>
                </li>
            ))}
        </ul> */}