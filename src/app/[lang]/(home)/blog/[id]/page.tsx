import React from 'react'
import { storage } from '@root/ts/firebase'
import { getDownloadURL, ref } from 'firebase/storage';
import { marked } from 'marked';
import style from './content.module.css'

export async function generateStaticParams() {
  return [{ id: 'example'},{id: 'example2'}, {id: 'example3'}]
}


async function getMarkdownFile(blogId:string){
 
  const urlMD = await getDownloadURL(ref(storage, `blogs/${blogId}.md`)).then((url) => url)
      
  const content = await fetch(urlMD).then((res) => (res.text())) 
  return content;
  
}


export default async function blogPage({
  params
}:{
  params:{
    id:string
  }
}) {

  const content = await getMarkdownFile(params.id)
  const html = marked.parse(content)

  const calculateReadingTime = (text:string):string => {
    const wordsPerMinute = 200;
    
    let textLength = text.split(" ").length;
    let result:string = '0';
    if(textLength > 0){
      let value = Math.ceil(textLength / wordsPerMinute);
      result = `~${value} min read`;
    }
    return result
  };
 
  return (
    <section className='m-auto max-w-3xl mt-32 flex flex-col gap-4'>
      <div className='bg-blue-300 rounded-lg w-full aspect-video'></div>
      <div className='w-full flex felx-col'>
        <div className='w-12 h-12 rounded-full bg-blue-300'></div>
        <div>
          <h1>Articulo escrito por Ricardo Sanchez</h1>
          <p>06/03/2021</p>
        </div>

      </div>
      <div className={style.content} dangerouslySetInnerHTML={{__html: html}}></div>

    </section>
  )
}
