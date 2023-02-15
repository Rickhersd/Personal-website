import React from 'react'
import Service from './service'

import databaseIcon from '@root/svgs/databaseCog.svg'
import Link from 'next/link'

import CvIcon from '@root/svgs/cvIcon.svg'

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
    </section>
  )
}
