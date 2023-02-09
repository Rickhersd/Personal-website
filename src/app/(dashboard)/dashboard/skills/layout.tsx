import React from 'react'
import '@root/styles/dashboard_skills.css'
import Plus_icon from '@root/svgs/plus-circle.svg'
import Link from 'next/link'
import ReloadBtn from '../../reloadBtn'

export default function DashboardSkills({
  children
}:{
  children: React.ReactNode
}){
  
  return (
    <div className='dashboard-skills'>
      <nav className='dashboard-skills__nav'>
        <ul className='dashboard-skills__nav-list'>
          <li className='dashboard-skills__nav-item'>
            <Link href="/dashboard/skills/list">All</Link>
          </li>
          <li className='dashboard-skills__nav-item'>All</li>
          <li className='dashboard-skills__nav-item'>Backend</li>
          <li className='dashboard-skills__nav-item'>CDM</li>
          <li className='dashboard-skills__nav-item'>Other</li>
          <ReloadBtn>Dark mode</ReloadBtn>
        </ul>
        <Link href="/dashboard/skills/add" className='dashboard-skills__nav-addBtn'><Plus_icon></Plus_icon> Add Skill</Link>
      </nav>
      <hr></hr>
      {children}
    </div>
  )
}

