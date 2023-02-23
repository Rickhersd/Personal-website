import Link from 'next/link';
import React from 'react'
import LogotypeIcon from '@root/svgs/logotype.svg'
import Darkmode_btn from '../../buttons/Darkmode_Button';
import NavMobileMenu from './NavMobileMenu';

export default function NavMobile() {
  
  return <>
    <div className='w-full p-4 flex felx-row justify-between bg-white fixed'>
      <Link href="home">
        <LogotypeIcon className='w-12 h-10'></LogotypeIcon>
      </Link>
      <div className='flex flex-row gap-2'>
        <Darkmode_btn></Darkmode_btn>
        <NavMobileMenu></NavMobileMenu>
      </div> 
    </div>
  </>
}



