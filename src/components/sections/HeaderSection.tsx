import Link from 'next/link'
import React from 'react'
import Logotype from '../logotype'
import Scenary from '../threejs/Scenary'

export default function HeaderSection() {
  return (
  <section className="max-w-7xl m-auto relative px-3 xl:px-0 h-screen flex justify-center items-center">
    <div className='max-w-5xl absolute ml-auto -top-1/4 right-0'>
      {/*<Scenary></Scenary>*/}
    </div>
    <div className=''>
      <h1 className='text-left text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight dark:text-white"'>Desarrollador Web Full Stack <br />Y apasionado del codigo</h1> 
      <p className="mt-8 max-w-lg text-xl text font-semibold">Bienvenido, soy Ricardo Sanchez y me dedico al desarrollo de paginas y aplicaciones web<br /> Aqui podras conocer todo sobre mi y mis servicios, y no olvides pasarte por mi blog.</p> 
      <ul className="flex flex-col sm:flex-row my-12 text-center gap-2" >
        <li>
          <Link className=" bg-slate-900 border-2 border-slate-900 block text-white w-full font-bold sm:px-14 py-4 rounded-lg" href="porfolio">Porfolio</Link>
        </li>
        <li>
          <Link className="sm:px-14 py-4 w-full border-blue-500 block text-blue-500 font-bold border-2 rounded-lg" href="contact-me">Contactame</Link>
        </li>
      </ul>
    </div>
  </section >
  )
}
