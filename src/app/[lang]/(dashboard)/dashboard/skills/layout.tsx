import React from 'react'
import '@root/styles/dashboard_skills.css'
import Plus_icon from '@root/svgs/plus-circle.svg'
import Link from 'next/link'
import InternalNavProvider from '@root/contexts/InternalNavContext'
import InternalNavigation from './InternalNavigation'

export default function DashboardSkills({
  children
}:{
  children: React.ReactNode
}){
  
  return (
    <div className='dashboard-skills'>
      <InternalNavProvider pathroot={'dashboard/skills'}>
        <InternalNavigation></InternalNavigation>
        <nav className='dashboard-skills__nav'>
          
        <Link href="/dashboard/skills/add" className='dashboard-skills__nav-addBtn'><Plus_icon></Plus_icon> Add Skill</Link>
        </nav>
        <hr></hr>
        {children}
      </InternalNavProvider>
    </div>
  )
}

