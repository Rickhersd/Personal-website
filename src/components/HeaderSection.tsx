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
    <div className='px-4'>
      <h1 className='text-left text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight dark:text-white"'>Desarrollador Web Full Stack <br />Y apasionado del codigo</h1> 
      <p className="mt-8 max-w-lg text-xl text font-semibold">Bienvenido, soy Ricardo Sanchez y me dedico al desarrollo de paginas y aplicaciones web<br /> Aqui podras conocer todo sobre mi y mis servicios, y no olvides pasarte por mi blog.</p> 
      <ul className="flex flex-row my-12" >
        <li>
          <Link className=" bg-blue-300 rounded-full px-14 py-3 shadow" href="porfolio">Porfolio</Link>
        </li>
        <li>
          <Link className="rounded-full px-14 py-3" href="contact-me">Contactame</Link>
        </li>
      </ul> 
    </div>
  </div>
  )
}
