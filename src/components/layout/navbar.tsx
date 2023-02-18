import Link from 'next/link'
import LogotypeIcon from '@root/svgs/logotype.svg'
import React from 'react'
import Darkmode_btn from '../buttons/Darkmode_Button'
import LanguageBtn from '../buttons/Language_Button'

export default function Navbar() {


  const routes = [
    {route:'about-me' , label: 'About me'},
    {route:'blog' , label: 'Blog'},
    {route:'projects' , label: 'Portfolio'},
    {route:'contact-me' , label: 'Contact'}
  ]

  return (
    <nav className='w-full py-4 mx-auto'>
      <div className='max-w-7xl flex justify-between mx-auto items-center '>
        <Link href="/">
          <LogotypeIcon className='w-60 h-10'></LogotypeIcon>
        </Link>
        <ul className="flex flex-row justify-center align-center">
          {routes.map((data, index) => (
              <li key={index} className="flex items-center justify-center">
                <Link href={`/${data.route}`} className='text-neutral-700 text-sm p-3'>
                 {data.label}
                </Link>
              </li> 
            ) 
          )}
          <span className="self-center">|</span>
          <li className="flex flex-row items-center gap-2">
            <LanguageBtn></LanguageBtn>
            <Darkmode_btn></Darkmode_btn>
          </li>
        </ul>
      </div>
    </nav>   
  )
}
