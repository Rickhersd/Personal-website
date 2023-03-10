import Link from 'next/link'
import React from 'react'
import { ChevronsRight } from 'react-feather'
import ProjectFlashcard from '../flashcards/ProjectFlashCard'

export default function PortfolioSection() {
  return (
    <section className="max-w-7xl mx-auto mt-32">
      <div className='flex flex-row gap-3 items-baseline px-3 xl:px-0'>
        <h2 className='text-4xl sm:text-5xl block text-slate-900 dark:text-zinc-100 font-bold'>Proyectos Personales</h2>
        <Link className='hidden sm:block text-lg text-blue-500' href={'/'}>Ver todo</Link>
      </div>
      <p className='text-lg max-w-2x mt-4 px-3 xl:px-0'>A coninuacion una muestra de los proyectos mas recientes que he desarrollado.</p>
      <div className="flex flex-col sm:px-3 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-2 md:gap-4 mt-12">
        <ProjectFlashcard></ProjectFlashcard>
        <ProjectFlashcard></ProjectFlashcard>
        <ProjectFlashcard></ProjectFlashcard>
      </div>
      <div className='px-3 mt-6'>
        <button className='flex flex-row gap-3 mx-auto w-full text-blue-500 py-4 border-2 border-blue-500 font-bold rounded-lg sm:hidden justify-center'>
          VISITAR PORTFOLIO
          <ChevronsRight></ChevronsRight>
        </button>
      </div>
    </section>
  )
}
