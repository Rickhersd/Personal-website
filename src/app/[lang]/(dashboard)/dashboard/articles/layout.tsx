import React from 'react'
import Link from 'next/link'
import { Plus } from 'react-feather'



export default function Layout({
  children
}:{
  children: React.ReactNode
}){
  
  return (
    <div className=''>
      <nav className='w-full flex flex-row justify-between'>
        <div></div>
        <Link href="/dashboard/projects/add" className='flex flex-row items-center bg-transparent cursor-pointer py-2 px-5'>
          <Plus className='w-7 h-7'></Plus> 
          <span>Anadir Proyecto</span> 
        </Link>
      </nav>
      <hr></hr>
      {children}
    </div>
  )
}

