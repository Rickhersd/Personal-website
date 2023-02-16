
import Link from "next/link";

import React from 'react'

export default function BlogSection() {
  return (
    <div className="mt-2">
      <div  className="flex flex-row">
        <h1 className="text-5xl font-extrabold text-slate-800">Blog</h1>
        <Link href='blog' className='text-slate-900'>Ver Todo...</Link> 
        <p>Ademas de Programar, tambien dispongo de mi blog personal en el que vot compartiendo lo que voy aprendiendo de este dolor pero grandioso mundo del codigo</p>
      </div>
      <div className="grid grid-cols-3 gap-10">
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
