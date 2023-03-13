'use client'

import Article from "@root/models/article"
import { Timestamp } from "firebase/firestore"
import Link from "next/link"
import { useState } from "react"
import { Folder } from "react-feather"


export default function ArticleList({list}:{list:string}){

  const data = JSON.parse(list) as Array<Article>

  return <>
    <ul className="grid grid-rows-[repeat(10,_minmax(0,_1fr))] max-w-4xl w-full mt-12">
      {data.map((data, index)=>{
        return <li key={index}>
          <ArticleItem data={data}></ArticleItem>
        </li>
      })}
    </ul>
  </>
}

function ArticleItem ({data}:{data:Article}) {

  const publishDate = new Date((data.publishedOn as Timestamp).seconds * 1000).toDateString()

  return<>
    <div className="max-w-5xl flex flex-row gap-4">
      <div className="aspect-[16/12] w-24 bg-gray-200 min-w-[15rem]"></div>
      <div className="flex flex-col justify-between gap-2 w-full">
        <div>
          <Link href={`blog/${data.slug}`} className='text-3xl text-slate-800 font-medium' prefetch={false}>{data.title}</Link>
          <p className="text-lg">{data.summary}</p>
        </div>
        <div className='flex flex-row justify-between items-center'>
          <h4 className="text-sm italic"> {publishDate}</h4>
          <div className="flex flex-row gap-2 text-sm items-center"><Folder className="w-4 h-4"></Folder>{data.category}</div>
        </div>
      </div>
    </div>
    <hr className="mt-4"></hr>
  </>
}
  