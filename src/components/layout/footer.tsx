'use client'

import AnchorItem from '../AnchorItem';
import ListRender from '../ListRender';
import SuscribeFlashCard from '../flashcards/SuscribeFlashCard'
import { GitHub, Linkedin, Mail } from 'react-feather'
//import LogotypeIcon from '../images/logotype.svg'

export default function Footer() {
  return (
    <footer className='w-full mt-20 sm:mt-28 border-slate-100'>
      <div className='flex flex-col-reverse gap-4 sm:grid sm:grid-cols-6 max-w-7xl mx-auto pt-10 p-4'>
        <div>
          <h4 className="text-2xl font-bold hidden sm:block text-slate-800">Social</h4>
          <ul className="flex justify-center sm:flex-col">
            <ListRender className='flex flex-col py-0 sm:py-2 sm:flex-row text-slate-700 pl-0 items-center'>
              <a href='https://github.com/Rickhersd'>
                <Mail className='w-8 h-8 sm:w-5 sm:h-5 text-gray-800'></Mail>
                <span className='hidden sm:block'>Gmail</span>
              </a>
              <a href='https://www.linkedin.com/in/ricardosan-webdev/'>
                <Linkedin className='w-8 h-8 sm:w-5 sm:h-5 text-gray-800'></Linkedin>
                <span className='hidden sm:block'>Linkelin</span>
              </a>
              <a href='https://github.com/Rickhersd'>
                <GitHub className='w-8 h-8 sm:w-5 sm:h-5 text-gray-800'></GitHub>
                <span className='hidden sm:block'>Github</span>
              </a>
            </ListRender>
          </ul>
        </div>
        <div className='sm:col-span-2'>
          <h4 className='text-2xl font-bold text-slate-800'>Navegacion</h4>
          <div className='grid grid-cols-2'>
            <ul>
              <ListRender className='text-slate-700 p-2 pl-0 '>
                <AnchorItem href="about">Home</AnchorItem>
                <AnchorItem href="about">Sobre mi</AnchorItem>
                <AnchorItem href="blog">Blog</AnchorItem>
                <AnchorItem href="projects">Portfolio</AnchorItem>
                <AnchorItem href="contact">Contact</AnchorItem>
              </ListRender>
            </ul>
            <ul>
              <ListRender className='text-slate-700 p-2 pl-0'>
                <AnchorItem href="about">Curriculum</AnchorItem>
                <AnchorItem href="about">Habilidades</AnchorItem>
                <AnchorItem href="contact">Politicas de Privacidad</AnchorItem>
                <AnchorItem href="contact">Atribuciones</AnchorItem>
              </ListRender>
            </ul>
          </div>
        </div>
        <SuscribeFlashCard className="ml-auto max-w-md sm:col-span-3 rounded-md shadow-lg border-gray-300 border"/>
      </div>
      <div className="w-full p-4">
        <p className="block mx-auto text-xs text-center text-slate-600"> Esta pagina fue desarrollada con NextJS © 2022 RicardoDev</p>
        <p className='block mx-auto text-xs text-center text-slate-600'>Todos los modelos 3D utilizados fueron descargados de PolyPizza bajo licencia CC by 3.0: ver Atribuciones</p>
      </div>
    </footer>
  )
}
