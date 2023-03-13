import Article from '@root/models/article';
import Link from 'next/link';
import React from 'react'
import { ChevronsRight } from 'react-feather';
import Flashcard from "../flashcards/ArticleFlashcard";

export default async function BlogSection({promise}:{promise:Promise<Article[]>}) {

  const recentArticles = await promise;

  return (
    <section className="max-w-7xl mx-auto mt-32">
      <div className="flex flex-row items-end gap-3 px-3 xl:px-0">
        <h2 className="text-5xl block font-bold text-slate-900 dark:text-zinc-100">Blog</h2>
        <Link className=' hidden sm:block text-lg text-blue-500' href={'/'}>Ver todo</Link>
      </div>
      <p className="max-w-2xl mt-4 px-3 xl:px-0 text-base sm:text-lg">Ademas de Programar, tambien dispongo de mi blog personal en el que vot compartiendo lo que voy aprendiendo de este dolor pero grandioso mundo del codigo</p>
      <ul className="flex flex-col px-0 sm:px-3 xl:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3  gap-1 sm:gap-2 md:gap-4 mt-12">
        {recentArticles.map(article => {
          return <li key={article.id}>
            <Flashcard 
            title={article.title}
            summary={article.summary}
            category={article.category}
            slug={article.slug}
            date={article.publishedOn}
            />
          </li>
        })}
      </ul>
      <div className='px-3 mt-6'>
        <button className='flex flex-row gap-3 mx-auto w-full text-blue-500 py-4 border-2 border-blue-500 font-bold rounded-lg sm:hidden justify-center'>
          VISITAR BLOG
          <ChevronsRight></ChevronsRight>
        </button>
      </div>
    </section>
  )
}






