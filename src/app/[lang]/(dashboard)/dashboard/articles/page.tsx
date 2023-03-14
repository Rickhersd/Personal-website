'use client'

import fetchDoc from "@root/hooks/FetchDoc";
import { useState, useEffect } from "react";

import ArticleClass from "@root/models/article";
import { Timestamp } from "firebase/firestore";
import useDeleteDoc from "@root/hooks/useDelete";
import { Edit, Trash } from "react-feather";
import useFilter from "@root/hooks/useFilter";
import useUpdateDoc from "@root/hooks/useUpdate";
import React from "react";

export default function Page(){

  const [delRes, deleteDocument] = useDeleteDoc('articles')
  const [uptRes, updateDocument] = useUpdateDoc('articles')
  const [articlesList, setArticlesList] = useState<ArticleClass[]>([]);
  const [current, {filterByField}] = useFilter(articlesList)

  useEffect(()=>{
    fetchDoc('articles', ArticleClass).then(res => setArticlesList(res))
  },[delRes])
  
  const handleDelete = (id:string):void => {
    deleteDocument(id)
  }

  const handleUpdate = (id:string):void => {
    updateDocument(id, {'state':'checked'})
  } 

  return (
    <div>
      {articlesList.length == 0 && <p>{`Se encontro un total de ${articlesList.length} articulos registrados`}</p>}
      <ul className='list-skill__list'>
      {!(articlesList.length == 0) ?
        articlesList.map((article, index) => (
          <li key={index}>
            <Article article={article} handleDelete={handleDelete} handleUpdate={handleUpdate}></Article>
          </li>
        ))
        :
        <div> No hay articulos disponibles</div>    
      }
      </ul>
    </div>
  )
}

function Article({
  article,
  handleDelete,
  handleUpdate
}:{
  article: ArticleClass,
  handleDelete: (id:string) => void,
  handleUpdate: (id:string) => void
} ){

  const publishDate = new Date((article.publishedOn as Timestamp).seconds * 1000).toDateString()

  return (
    <>
      <div className="w-full border-b py-4 gap-2 flex flex-col">
        <h2 className="text-2xl">{article.title}</h2>
        <p className="text-lg">{article.summary}</p>
        <div>
          <ul className="flex flex-row gap-2">
            <li>Etiquetas:</li>
            {article.tags.map((tag, index) => <li key={index}>{tag}</li>)}
          </ul>
        </div>
        <p>{`Fecha de creacion: ` + publishDate}</p>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap items-center">
            <button onClick={ _ => handleDelete(article.id)}><Trash className="w-5 h-5"></Trash></button>  
            <button><Edit className="w-5 h-5"></Edit></button>
          </div>  
          <button 
            className="py-2 w-28 text-white font-bold rounded cursor-pointer bg-blue-500 disabled:bg-gray-500 disabled:text-gray-700" 
            onClick={ _ => handleUpdate(article.id)}
            disabled={!(article.state == 'unchecked')}
          >
          {article.state == 'unchecked'? 'Check' : 'Checked'}  
          </button>
        </div>
      </div>
    </>
  )
}