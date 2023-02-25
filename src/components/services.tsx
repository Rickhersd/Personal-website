import React from 'react'
import Service from './service'
import databaseIcon from '@root/svgs/databaseCog.svg'
import Link from 'next/link'
import CvIcon from '@root/svgs/cvIcon.svg'
import ListRender from './ListRender'
import { ArrowRight, FileText } from 'react-feather'

export default function Services() {

  return (
    <section className='services__section'>
      <div className='services__top-part'> 
        <header className='services__header'>
          <h1 className='services__header-title'>Un Desarrolador Web Completo</h1>
          <h6 className='services__header-text'>Estyo contanste aprendizaje para hacer frente a toda clase de proyectos  solucionales a todo tipo de proyectoss</h6> 
        </header>
        <div className='services__linksGrop'>
          <Link href='' className='services__linksGrop-link'>Mas Sobre Mi</Link>
          <a href="hola.com" className='services__linksGrop-cvLink'><CvIcon></CvIcon></a>
        </div>
      </div>
      <section className='bg-white py-32 border-y-slate-200 border-y'>
       
        <div className='max-w-3xl grid grid-cols-3 gap-4 m-auto'>
          
          <div className='row-span-2 text-left flex flex-col gap-3'>
            <h2 className='text-3xl text-slate-800 font-extrabold '>Un gusto Saludarte!</h2>
            <p className='text-lg text-slate-700 leading-snug'>Soy un desarrolador Full Stacke de Venezuela y estudiante de ingenieira en ingormatica. y en la actualilidad me dedico al desarrollo de pagians y aplciacione web.  </p>
            <p className='text-lg text-slate-700 leading-snug'>buscando siempre realziar productos de caldiad, aplciacionado buenas praticas de arquitectura de sofware, Clean Code y SOLID. </p>
          </div>
          <div className='w-20 h-20 border broder-gray-300'>Imagen</div> 
          <div className='flex justify-between col-span-3'>
            <Link className='text-blue-600 flex flex-row gap-2 justify-center' href='about me'>
              <FileText></FileText>
              CV
            </Link>
            <Link className='text-blue-600 flex flex-row gap-2' href='about me'>
              Sobre mi
              <ArrowRight></ArrowRight>
            </Link>
          </div>
        </div>
      </section>
      <div className='services-cont'>
        <Service 
          title={'Desarrallador Frontent'} 
          description={'Desarollo del aspecto visual de sitios web'} 
          svgUrl={databaseIcon}></Service>
        <Service 
          title={'Desarrollador Backend'} 
          description={'Matenimiento y estrutura de la logica de paginas Web: desarrollo de blogs, e-commers, etc'} 
          svgUrl={databaseIcon}></Service>
        <Service 
          title={'UX and UI Designer'} 
          description={'Desarrallo para'} 
          svgUrl={databaseIcon}></Service>
      </div>
      <div className='m-auto max-w-7xl'>
        <h1 className='text-3xl'>Desarrollador Frontend</h1>
        <div className='max-w-2xl'>Desarrollo y gestionaon de autenticacion. Actualmente Trabajo con </div>
        <ul>
          <ListRender className=' flex flex-row gap-4'>
            <button className='w-10 h-10'>Basicos de la web</button>
            <button className='w-10 h-10'>React Aplicaciones</button>
            <button className='w-10 h-10'>Disenos responsivos y</button>
            <button className='w-10 h-10'>Backend</button>
            <button className='w-10 h-10'>Next</button>
          </ListRender>
        </ul>
        <div className='max-w-3xl'>
          Excelente dominio en las compenteicas bisicas de HTML y CSS para la creacion de paginas, ladin
        </div>
        <ul className='flex flex-row'> HTML, CSS, Javascript
          <li>HTML</li>
          <li>CSS</li>
          <li>JAvacript</li>
        </ul>
      </div>
      <div>
        <div>Desarrollador Frontend</div>
          <div>Desarrollo y gestionaon de autenticacion. Actualmente Trabajo con </div>
          <ul>
            <ListRender className=''>
              <button>PHP</button>
              <button>Python</button>
              <button>Database</button>
            </ListRender>
          </ul>
      </div>

    </section>
  )
}
