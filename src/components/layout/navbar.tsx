import Link from 'next/link'
import DarkmodeBtn from '@root/svgs/darkmode-btn.svg'
import LogotypeIcon from '@root/svgs/logotype.svg'
import React from 'react'

export default function Navbar() {


  const routes = [
    {route:'about-me' , label: 'About me'},
    {route:'blog' , label: 'Blog'},
    {route:'projects' , label: 'Portfolio'},
    {route:'contact-me' , label: 'Contact'}
  ]

  return (
    <nav className='w-full h-14 shadow-sm mx-auto'>
      <div className='lg:container flex justify-between mx-auto items-center '>
        <Link href="/" className="">
          <LogotypeIcon className='w-60 h-10'></LogotypeIcon>
        </Link>
        <ul className="flex flex-row">
          {routes.map((data, index) => (
              <li key={index} className="w-28 h-14 flex items-center justify-center">
                <Link href={`/${data.route}`} className='text-neutral-700 text-sm p-3'>
                 {data.label}
                </Link>
              </li> 
            ) 
          )}
          <span className="nav__span"></span>
          <li className="nav__list-item-config">
            <DarkmodeBtn></DarkmodeBtn>
          </li>
        </ul>
      </div>
    </nav>   
  )
}
