'use client'

import AnchorItem from '../AnchorItem';
import ListRender from '../ListRender';
import SuscribeFlashCard from '../flashcards/SuscribeFlashCard'
import { GitHub, Linkedin, Mail } from 'react-feather'
import LogotypeIcon from '@root/svgs/logotype.svg'

export default function Footer() {

  const sucribe = (<SuscribeFlashCard />)

  return (
    <footer className='w-full px-3 py-8 mt-20 sm:mt-28 border-t border-slate-200 flex flex-col gap-4 items-center'>
      <LogotypeIcon className='w-60 py-4' />
      
      <ul className='flex flex-row flex-wrap justify-center'>
        <ListRender className='p-2 pl-0 text-lg'>
          <AnchorItem href="about">Inicio</AnchorItem>
          <span className='hidden sm:inline'>|</span>
          <AnchorItem href="about">Sobre mi</AnchorItem>
          <span className='hidden sm:inline'>|</span>
          <AnchorItem href="blog">Blog</AnchorItem>
          <span className='hidden sm:inline'>|</span>
          <AnchorItem href="projects">Porfolio</AnchorItem>
          <span className='hidden sm:inline'>|</span>
          <AnchorItem href="contact">Contacto</AnchorItem>
          <span className='hidden sm:inline'>|</span>
          <AnchorItem href="contact">Atribuciones</AnchorItem>
        </ListRender>
      </ul>   
      <ul className="flex flex-row g-3 text-slate-900 dark:text-zinc-100">
        <ListRender className='flex flex-col py-0 sm:py-2 sm:flex-row pl-0 items-center'>
          <a href='https://github.com/Rickhersd'>
            <Mail className='w-6 h-6 text-gray-800'></Mail>
          </a>
          <a href='https://www.linkedin.com/in/ricardosan-webdev/'>
            <Linkedin className='w-6 h-6  text-gray-800'></Linkedin>
          </a>
          <a href='https://github.com/Rickhersd'>
            <GitHub className='w-6 h-6 text-gray-800'></GitHub>
          </a>
        </ListRender>
      </ul>
      <div> 
        <p className="block mx-auto text-xs text-center text-slate-600 dark:text-gray-400"> Esta pagina fue desarrollada con NextJS © 2022 RicardoDev</p>
        <p className='block mx-auto text-xs text-center text-slate-600 dark:text-gray-400'>Todos los modelos 3D utilizados fueron descargados de PolyPizza bajo licencia CC by 3.0: ver Atribuciones</p>
      </div>
    </footer>
  )
}
