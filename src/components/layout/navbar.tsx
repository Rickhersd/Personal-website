import Link from 'next/link'
import LogotypeIcon from '@root/svgs/logotype.svg'
import React from 'react'
import Darkmode_btn from '../buttons/Darkmode_Button'
import LanguageBtn from '../buttons/Language_Button'
import ListRender from '../ListRender'
import AnchorItem from '../AnchorItem'
import NavMobileMenu from './navMobile/NavMobileMenu'
import Logotype from '../logotype'

export default function Navbar() {

  return <>
    <nav className='w-full p-4 flex fixed sm:absolute top-0 z-50 bg-zinc-50 dark:bg-zinc-800 justify-between items-center '>
      <Logotype widthPhoto='w-12' widthText='w-48' height='h-12' ></Logotype>
      <ul className="flex flex-row justify-center gap-2 items-center">
        <ListRender className='flex items-center justify-center text-base font-medium p-3'>
          <AnchorItem className='hidden md:block' href='about'>Sobre mi</AnchorItem>
          <AnchorItem className='hidden md:block' href='blog'>Blog</AnchorItem>
          <AnchorItem className='hidden md:block' href='projects'>Portfolio</AnchorItem>
          <AnchorItem className='hidden md:block' href='contact'>Contacto</AnchorItem>
          <span className="hidden md:block self-center px-0">|</span>
          <LanguageBtn className="hidden sm:block" ></LanguageBtn>
          <Darkmode_btn></Darkmode_btn>
          <NavMobileMenu className='md:hidden'></NavMobileMenu>
        </ListRender>
      </ul>
    </nav>   
  </>
}
