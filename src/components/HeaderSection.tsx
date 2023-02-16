import Link from 'next/link'
import React from 'react'

export default function HeaderSection() {
  return (
  <div className="header__container">
    <div className='max-w-7xl'>
      <div className="header__rightside">
        <div>
          <h1 className='text-left text-5xl font-medium text-blue-900'>Hola, mi nombre es <br /><span>RICARDO SANCHEZ</span></h1> 
          <p className="header__subtext data">Desarollador Web Full Stack y Apasionado del Código.<br /> <span> Creo impresionantes y originales páginas web, y disfruto cada día poder dedicarme a ello.</span></p> 
        </div>
      </div>
      <div className='my-12'>
        <ul className="flex flex-row" >
          <li>
            <Link className=" bg-blue-300 rounded-full px-14 py-3 shadow" href="porfolio">Porfolio</Link>
          </li>
          <li>
            <Link className="rounded-full px-14 py-3" href="contact-me">Contactame</Link>
          </li>
        </ul> 
      </div>
    </div>
  </div>
  )
}
