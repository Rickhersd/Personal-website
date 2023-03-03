import React from 'react'
import { FileText } from 'react-feather'
import ChevronsAboutMeBtn from '../buttons/ChevronsButton'

export default function AboutMeResume() {
  return <> 
    <section className='bg-slate-50 py-28 '> 
      <div className='max-w-3xl sm:grid sm:grid-cols-3 gap-4 m-auto grid grid-cols-1'>
        
        <div className='sm:col-span-2 sm:row-start-1 row-start-2 text-left flex flex-col gap-3'>
          <h2 className='text-4xl sm:text-5xl text-center sm:text-left text-slate-800 font-extrabold '>Un gusto Saludarte!</h2>
          <p className='text-lg text-slate-700 leading-snug'>Me llamo Ricardo Sánchez, y soy un desarrollador Full Stack de Venezuela y estudiante de ingeniería en informática. Soy un apasionado a la programación y me dedico al desarrollo de páginas y aplicaciones web, utilizando las mejores y últimas tecnologías del mercado.</p>
          <p className='text-lg text-slate-700 leading-snug'>Mi visión es especializarme en todo lo que abarca al desarrollo web para ofrecer servicios y productos de calidad, escalables, y que sean ejemplo de buenas prácticas de arquitectura de software, Clean Code y principio SOLID. </p>
        </div>
        <div className="flex sm:justify-end justify-center">
          <div className='w-52 h-52 bg-gray-400 border broder-gray-300 rounded-xl'>Imagen</div> 
        </div>
        <div className='flex justify-between sm:col-span-3'>
          <a className='text-blue-600 flex flex-wrap items-center flex-row gap-2 justify-center' href='about me'>
            <FileText></FileText>
            CV
          </a>
          <ChevronsAboutMeBtn />
        </div>
      </div>
    </section>
  </>
}
