
import Link from "next/link";

import React from 'react'
import Flashcard from "./ArticleFlashcard";
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
          category="Personal" date={""}></Flashcard>
        <Flashcard 
          title="Las matematicas y la programacion"
          description="Algunos dicen, otros diran que si. Todo lo relacionado entre las matematicas y la programacion"
          category="Reflexion" date={""}></Flashcard>
        <Flashcard 
          title="Mejor programador apenas comenzando"
          description="Si apenas estas comenzando, cada paso descrito aqui te ayudara a ser mejor programor para el dia a dia"
          category="Aprendizaje" date={""}></Flashcard>
        <Flashcard 
          title="Mi Portofoio: una gran y una experiencia"
          description="Quienes conocer como se desarrollo esta pagina? Todo el proceso explicado y sus dificultades que hice para desarrolar mi portfolio<"
          category="Personal" date={""}></Flashcard>
        <Flashcard 
          title="Las matematicas y la programacion"
          description="Algunos dicen, otros diran que si. Todo lo relacionado entre las matematicas y la programacion"
          category="Reflexion" date={""}></Flashcard>
        <Flashcard 
          title="Mejor programador apenas comenzando"
          description="Si apenas estas comenzando, cada paso descrito aqui te ayudara a ser mejor programor para el dia a dia"
          category="Aprendizaje" date={""}></Flashcard>
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


