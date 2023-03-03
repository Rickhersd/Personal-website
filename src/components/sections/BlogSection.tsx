import Link from 'next/link';
import React from 'react'
import { ChevronsRight } from 'react-feather';
import Flashcard from "../flashcards/ArticleFlashcard";

export default function BlogSection() {
  return (
    <section className="max-w-7xl mx-auto mt-32">
      <div className="flex flex-row items-end gap-3">
        <h2 className="text-5xl block font-bold text-slate-900 dark:text-zinc-100">Blog</h2>
        <Link className=' hidden sm:block text-lg text-blue-500' href={'/'}>Ver todo</Link>
      </div>
      <p className="max-w-2xl mt-4">Ademas de Programar, tambien dispongo de mi blog personal en el que vot compartiendo lo que voy aprendiendo de este dolor pero grandioso mundo del codigo</p>
      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 mt-12">
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
      <div className='px-3'>
        <button className='flex flex-row gap-3 mx-auto w-full text-blue-500 py-4 border-2 border-blue-500 font-bold rounded-lg sm:hidden justify-center'>
          VISITAR BLOG
          <ChevronsRight></ChevronsRight>
        </button>
      </div>
    </section>
  )
}






