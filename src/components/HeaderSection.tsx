import { Canvas } from '@react-three/fiber'
import Link from 'next/link'
import React from 'react'
import Scenary from './threejs/Scenary'

export default function HeaderSection() {
  return (
  <div className="max-w-7xl m-auto relative">
    <div className='max-w-5xl absolute ml-auto -top-1/4 right-0'>
      {/*<Scenary></Scenary>*/}
    </div>
    <div className='mt-80'>
      <div className="header__rightside">
        <div>
          <h1 className='text-left text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight dark:text-white"'>Hola, mi nombre es <br /><span>RICARDO SANCHEZ</span></h1> 
          <p className="mt-8 max-w-lg text-xl font-semibold">Soy un desarrollador Web Full Stack y apasionado del Código.<br /> <span> Me dedico al desarrollo de aplicaciones web modernas, escalables y de calidad</span></p> 
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
