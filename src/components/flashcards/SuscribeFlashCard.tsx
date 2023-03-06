import Link from 'next/link'
import React from 'react'

export default function SuscribeFlashCard({}:{}){
  return (
  <div className="ml-auto max-w-md sm:col-span-3 flex flex-col justify-between rounded-md shadow-md border-gray-300 border">
    <h4 className='text-2xl font-bold text-slate-800'>Suscripcion</h4>
    <div className="p-4 w-full">
      <div className="text-gray-800"> Siempre estoy pensando en nuevas ideas para publicar</div>
      
    </div>
    <form className="max-w-full border border-gray-300 rounded-full relative mt-4 flex flex-row">
        <input className="py-3 pr-4 pl-32 w-full bg-transparent rounded-full border border-gray-300 " type="text" placeholder="Email"></input>
        <button className="rounded-full px-5 py-2 absolute 
        left-1.5 top-1/2 bg-gradient-to-r from-sky-500 to-sky-400 -translate-y-1/2" type="submit">Subscribe</button>
      </form>
  </div>
  )
}
