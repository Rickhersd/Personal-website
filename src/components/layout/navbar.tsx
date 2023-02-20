import Link from 'next/link'
import LogotypeIcon from '@root/svgs/logotype.svg'
import React from 'react'
import Darkmode_btn from '../buttons/Darkmode_Button'
import LanguageBtn from '../buttons/Language_Button'
import ListRender from '../ListRender'
import AnchorItem from '../AnchorItem'

export default function Navbar() {

  return (
    <nav className='w-full py-4 mx-auto'>
      <div className='max-w-7xl flex justify-between mx-auto items-center '>
        <Link href="/">
          <LogotypeIcon className='w-60 h-10'></LogotypeIcon>
        </Link>
        <ul className="flex flex-row justify-center gap-2 items-center">
          <ListRender className='flex items-center justify-center text-neutral-700 text-sm p-3'>
            <AnchorItem href='about-me' >About me</AnchorItem>
            <AnchorItem href='blog'>Blog</AnchorItem>
            <AnchorItem href='projects'>Portfolio</AnchorItem>
            <AnchorItem href='contact-me'>Contact</AnchorItem>
            <span className="self-center">|</span>
            <LanguageBtn></LanguageBtn>
            <Darkmode_btn></Darkmode_btn>
          </ListRender>
        </ul>
      </div>
    </nav>   
  )
}
