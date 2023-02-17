
import Link from "next/link";

import React from 'react'
import Particles from "./particles";

export default function BlogSection() {
  return (
    <div className="mt-2">
      <div  className="flex flex-col items-center justify-center p-3 bg-slate-500 h-96">
        <h1 className="text-5xl text-center block font-extrabold text-slate-800">Blog</h1>
        <div className="grid grid-cols-5 gap-4 mt-4">
          <Category title="Personal"></Category>
          <Category title="Tips"></Category>
          <Category title="Tutorials"></Category>
          <Category title="Opinion"></Category>
          <Category title="Experiences"></Category>
        </div> 
        <p className="mx-auto max-w-md text-center mt-4">Ademas de Programar, tambien dispongo de mi blog personal en el que vot compartiendo lo que voy aprendiendo de este dolor pero grandioso mundo del codigo</p>
      </div>
      <div className="max-w-7xl m-auto grid grid-cols-3 gap-10 -translate-y-16">
        <Flashcard 
          title="Mi Portofoio: una gran y una experiencia" 
          description="Quienes conocer como se desarrollo esta pagina? Todo el proceso explicado y sus dificultades que hice para desarrolar mi portfolio<" 
          category="Personal"></Flashcard>
        <Flashcard 
          title="Las matematicas y la programacion" 
          description="Algunos dicen, otros diran que si. Todo lo relacionado entre las matematicas y la programacion" 
          category="Reflexion"></Flashcard>
        <Flashcard 
          title="Mejor programador apenas comenzando" 
          description="Si apenas estas comenzando, cada paso descrito aqui te ayudara a ser mejor programor para el dia a dia" 
          category="Aprendizaje"></Flashcard>
        <Flashcard 
          title="Mi Portofoio: una gran y una experiencia" 
          description="Quienes conocer como se desarrollo esta pagina? Todo el proceso explicado y sus dificultades que hice para desarrolar mi portfolio<" 
          category="Personal"></Flashcard>
        <Flashcard 
          title="Las matematicas y la programacion" 
          description="Algunos dicen, otros diran que si. Todo lo relacionado entre las matematicas y la programacion" 
          category="Reflexion"></Flashcard>
        <Flashcard 
          title="Mejor programador apenas comenzando" 
          description="Si apenas estas comenzando, cada paso descrito aqui te ayudara a ser mejor programor para el dia a dia" 
          category="Aprendizaje"></Flashcard>
      </div>
      <div className="ml-auto max-w-md b rounded-md shadow-lg border-gray-300 border">
        <div className="p-4 w-full">
          <div className="text-gray-800"> Siempre estoy pensando en nuevas ideas para publicar</div>
          <form className="max-w-full border border-gray-300 rounded-full relative mt-4">
            <input className="py-3 pr-4 pl-32 w-full bg-transparent rounded-full border border-gray-300 " type="text" placeholder="Email"></input>
            <button className="rounded-full px-5 py-2 absolute 
            left-1.5 top-1/2 bg-gradient-to-r from-sky-500 to-sky-400 -translate-y-1/2" type="submit">Subscribe</button>
          </form>
        </div>
        <hr></hr>
        <Link href='' className="px-8 py-4 flex justify-between items-center">
          <p>Visit Blog</p>
          <div className="text-center">➡</div>
        </Link>
      </div>
   
      <Particles></Particles>

    </div>
  )
}

function Flashcard ({
  title,
  description,
  category
}:{
  title:string,
  description:string,
  category:string 
}){

  return (
  <div className="shadow-lg rounded overflow-hidden">
    <img src='' className='w-full aspect-video bg-slate-300' alt='Proyect-img'></img>
    <div className="px-4 pb-4 pt-3">
      <h6 className="text-xs pb-2  text-gray-600 font-extrabold tracking-wide "> 15 de Feb. del 2023</h6> 
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      <div className="font-normal py-2 text-gray-800">{description}</div> 
      <div className="w-full pt-4 flex items-center">
        <span className="w-full border  border-gray-300 h-0"></span>
        <h6 className="ml-auto pl-2 text-sm text-gray-600 font-extrabold tracking-wide ">{category.toUpperCase()}</h6> 
      </div>
    </div> 
  </div>
  )
}

function Category ({
  title,
}:{
  title:string,
}){

  return (
  <div className="flex flex-col items-center">
    <div className="w-20 h-20 bg-red-400"></div>
    <h5 className="">{title}</h5> 
  </div>
   
  )
}


