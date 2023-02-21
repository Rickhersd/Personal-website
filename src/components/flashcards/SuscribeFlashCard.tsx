import Link from 'next/link'
import React from 'react'

export default function SuscribeFlashCard({
  className
}:{
  className: string
}){
  return (
  <div className={className}>
    <div className="p-4 w-full">
      <div className="text-gray-800"> Siempre estoy pensando en nuevas ideas para publicar</div>
      <form className="max-w-full border border-gray-300 rounded-full relative mt-4">
        <input className="py-3 pr-4 pl-32 w-full bg-transparent rounded-full border border-gray-300 " type="text" placeholder="Email"></input>
        <button className="rounded-full px-5 py-2 absolute 
        left-1.5 top-1/2 bg-gradient-to-r from-sky-500 to-sky-400 -translate-y-1/2" type="submit">Subscribe</button>
      </form>
    </div>
    <hr></hr>
    <Link href='' className="px-8 py-4 flex justify-between items-center">
      <p>Visit Blog</p>
      <div className="text-center">➡</div>
    </Link>
  </div>
  )
}
