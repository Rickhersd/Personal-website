import AnchorItem from '@root/components/AnchorItem'
import ListRender from '@root/components/ListRender'
import React from 'react'
import LogotypeIcon from '@root/svgs/logotype.svg'
import { X, Mail, Linkedin, GitHub } from 'react-feather'
import Link from 'next/link'
import NavMobileSidebarWrapper from './NavMobileSidebarWrapper'
import NavMobileSidebarBtn from './NavMobileSidebarBtn'

export default function NavMobileSidebar({
  handleClick
}:{
  handleClick: () => void
}) {
  return (
    <NavMobileSidebarWrapper 
      className='fixed top-0 right-0 flex flex-col justify-between  min-h-screen w-72 bg-slate-50'
      > 
      <div className='px-4'>
        <div className='pb-4 pt-4 flex justify-between'>
          <Link href="home">
            <LogotypeIcon className='w-48 h-10'></LogotypeIcon>
          </Link>
          <NavMobileSidebarBtn className='w-8 h-8' handleClick={handleClick}>
            <X></X>
          </NavMobileSidebarBtn>
        </div>
        <ul className="w-full flex flex-col gap-1">
          <ListRender className='block py-1 text-sm border-b border-slate-300 text-slate-700'>
            <AnchorItem href='home'>Inicio</AnchorItem>
            <AnchorItem href='blog'>Blog</AnchorItem>
            <AnchorItem href=''>Porfolio</AnchorItem>
            <AnchorItem href='about'>Sobre mi</AnchorItem>
            <AnchorItem href='contact'>Contacto</AnchorItem>
            <AnchorItem href=''>Habilidades</AnchorItem>
            <AnchorItem href=''>Curriculum</AnchorItem>
            <AnchorItem href=''>Politicas de Privacidad</AnchorItem>
            <AnchorItem href=''>Atribucciones</AnchorItem>
          </ListRender>
        </ul>
      </div>
      <div className='flex flex-col gap-4'>
      {/*<div className='p-4 border bg-slate-200 shadow-md flex flex-col gap-1'>
          <p className='text-slate-700 text-sm'>No te pierdas nuevo contenido: tutoriales, trucos y consejos sobre lo ultimo en desarrollo web.</p>
          <button className="w-full rounded-lg bg-sky-600 font-medium block m-auto py-3 text-white" type="submit"> Suscribirse a Sudev</button>
          <p className='text-xs text-center'>Ya te has registrado? Ingresar sesion.</p>
        </div>*/}
        <ul className="flex justify-center flex-row gap-4">
          <ListRender className='flex flex-row py-0 text-slate-700 pl-0 items-center'>
            <a href='https://github.com/Rickhersd'>
              <Mail className='w-6 h-6 text-gray-800'></Mail>
            </a>
            <a href='https://www.linkedin.com/in/ricardosan-webdev/'>
              <Linkedin className='w-6 h-6 text-gray-800'></Linkedin>
            </a>
            <a href='https://github.com/Rickhersd'>
              <GitHub className='w-6 h-6 text-gray-800'></GitHub>
            </a>
          </ListRender>
        </ul> 
        <p className=" px-4 block mx-auto text-xs text-center text-slate-600 pb-4 b-t"> Esta pagina fue desarrollada con NextJS <br /> © 2022 RicardoDev</p>
      </div>
    </NavMobileSidebarWrapper>
  )
}
