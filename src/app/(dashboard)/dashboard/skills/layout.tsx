import React from 'react'
import '@root/styles/dashboard_skills.css'
import Plus_icon from '@root/svgs/plus-circle.svg'
import Link from 'next/link'
import ThemeChangerBtn from '../../reloadBtn'
import InternalNavProvider from '@root/contexts/InternalNavContext'
import BtnPrueba from './add/btnPrueba'

export default function DashboardSkills({
  children
}:{
  children: React.ReactNode
}){
  
  return (
    <div className='dashboard-skills'>
      <InternalNavProvider>
        <nav className='dashboard-skills__nav'>
          <ul className='dashboard-skills__nav-list'>
            <li className='dashboard-skills__nav-item'>
              <Link href="/dashboard/skills/list">All</Link>
            </li>
            <li className='dashboard-skills__nav-item'>All</li>
            <li className='dashboard-skills__nav-item'>Backend</li>
            <li className='dashboard-skills__nav-item'>CDM</li>
            <li className='dashboard-skills__nav-item'>Other</li>
            <ThemeChangerBtn>Dark mode</ThemeChangerBtn>
          </ul>
          <Link href="/dashboard/skills/add" className='dashboard-skills__nav-addBtn'><Plus_icon></Plus_icon> Add Skill</Link>
        </nav>
        <BtnPrueba></BtnPrueba>
        <hr></hr>
        {children}
      </InternalNavProvider>
    </div>
  )
}

