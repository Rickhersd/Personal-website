import React from 'react'
import Link from 'next/link'
import { Plus } from 'react-feather'

export default function Layout({
  children
}:{
  children: React.ReactNode
}){
  return (
    <div className='px-4'>
      <h2 className='text-4xl mt-8 font-bold'>Articulos</h2>
      <nav className='w-full flex flex-row justify-between'>
        <ul>
          <li>
            <Link className='py-2 px-5' href="/dashboard/articles">Articulos</Link>
          </li>
          <li>
            <Link className='py-2 px-5'  href="/dashboard/articles/tags">Etiquetas</Link>
          </li>
        </ul>
        <Link href="/dashboard/articles/add" className='flex flex-row items-center gap-2 bg-transparent cursor-pointer py-2 px-5'>
          <Plus className='w-5 h-5'></Plus> 
          <span>Nuevo</span>
        </Link>
      </nav>
      {children}
    </div>
  )
}

