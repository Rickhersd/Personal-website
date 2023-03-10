import fetchDoc from "@root/hooks/FetchDoc";
import { Suspense } from "react";

import ArticleClass from "@root/models/article";
import { Timestamp } from "firebase/firestore";

async function getArticleList (){
  const list = await fetchDoc('articles', ArticleClass)
  return list;
}

export default async function ListSkills(){

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-expect-error */}
        <ArticleList></ArticleList>
      </Suspense>
    </div>
  )
}

async function ArticleList(){

  const articleList = await getArticleList();

  return <ul className='list-skill__list'>
      {!(articleList.length == 0) ?
        articleList.map((article, index) => (
          <Article article={article} key={index}></Article>
        ))
        :
        <div> No hay habilidades almacenadas</div>
      }
  </ul>
}

function Article({
  key,
  article
}:{
  key: number,
  article: ArticleClass
} ){

  const publishDate = new Date((article.publishedOn as Timestamp).seconds * 1000).toDateString()

  return <>
    <li className="w-full border-b py-4 gap-2">
      <h2>{article.title}</h2>
      <p>{article.summary}</p>
      <div>
        <ul className="flex flex-row gap-2 justify-between">
          <li>Etiquetas:</li> 
          {article.tags.map((tag, index) => <li key={index}>{tag}</li>)}
        </ul>
        <div> 
          {publishDate}
        </div>
      </div>
    </li>
  </>
}