import FetchDoc from '@root/hooks/FetchDoc'
import ArticleClass from '@root/models/article'
import { orderBy, where } from 'firebase/firestore'
import React, { Suspense } from 'react'
import ArticleListClient from '@root/components/articlesList'

async function getArticles(){
  const articlesList = FetchDoc('articles', ArticleClass, null, where('state','==','checked'))
  return articlesList;
}

export default async function Page() {

  const Articles = getArticles()

  return <>
    <section className='flex flex-col items-center mt-32'>
      <h1 className="text-center font-bold text-4xl sm:text-5xl text-slate-800">Blog</h1>
      <p className="max-w-xl mx-auto mt-8 text-base sm:text-lg text-left sm:text-center text-slate-700">Aquí encontrarás todos los artículos que he escrito desde que comencé mi carrera como desarrollador web</p>
      <Suspense fallback={<div>Cargando...</div>}>
        {/*@ts-expect-error*/}
        <ArticleList promise={Articles}></ArticleList>
      </Suspense>
    </section>
  </>
}

export async function ArticleList({promise}:{promise: Promise<ArticleClass[]>}){

  const articlesList = await promise;
  const list = JSON.stringify(articlesList)
  return <>
    <p className='max-w-xl mx-auto mt-1 text-base sm:text-lg text-left sm:text-center text-slate-700'> Hasta la fecha hay disponibles {articlesList.length} articulos</p>  
    <ArticleListClient list={list}></ArticleListClient>
  </>

}
