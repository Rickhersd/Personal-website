import React from 'react'
import { FileText, GitHub, Linkedin, Mail } from 'react-feather'
import ChevronsAboutMeBtn from '../buttons/ChevronsButton'
import ListRender from '../ListRender'

export default function AboutMeResume() {
  return <> 
    <section className=' bg-zinc-300 dark:bg-zinc-900'> 
      <div className='max-w-7xl p-3 gap-4 sm:py-16 sm:px-0 flex flex-col sm:grid sm:grid-cols-3 sm:gap-4 m-auto grid-cols-1'>
        <div className="flex sm:justify-end justify-center aspect-video sm:aspect-square col-start-3 sm:row-span-2 ">
          <div className='w-full h-full bg-gray-400 rounded-xl'>Imagen</div> 
        </div>
        <div className='col-span-2 row-start-1 col-start-1 text-left flex flex-col gap-3'>
          <h2 className='text-4xl sm:text-5xl mt-4 sm:mt-0 text-center sm:text-left text-slate-800 dark:text-zinc-100 font-extrabold '>Un gusto Saludarte!</h2>
          <p className='text-base sm:text-lg leading-snug'>Me llamo Ricardo Sánchez, y soy un desarrollador Full Stack de Venezuela y estudiante de ingeniería en informática. Soy un apasionado a la programación y me dedico al desarrollo de páginas y aplicaciones web, utilizando las mejores y últimas tecnologías del mercado.</p>
          <p className='text-base sm:text-lg leading-snug'>Mi visión es especializarme en todo lo que abarca al desarrollo web para ofrecer servicios y productos de calidad, escalables, y que sean ejemplo de buenas prácticas de arquitectura de software, Clean Code y principio SOLID. </p>
        </div>      
        <div className='col-start-1 row-start-2 col-span-2 h-fit mt-auto flex flex-row justify-between'>
          <ul className='flex flex-row text-blue-500 col-start-1 gap-3 row-start-2'>
            <ListRender className=''>
              <a href="/">
                <FileText />
              </a>
              <span>|</span>
              <a href="/">
                <Linkedin />
              </a>
              <a href="/">
                <GitHub />
              </a> 
              <a href="/">
                <Mail />
              </a>
            </ListRender>
          </ul>
          <ChevronsAboutMeBtn />
        </div>
      </div>
    </section>
  </>
}
