'use client'

import useFilter from "@root/hooks/useFilter";
import { useEffect, useState } from "react";
import SkillElement from "./SkillElement";

export default function ListSkills({listSkills}){

  const [currentFilter, filter] = useFilter(listSkills)
  const [state, setState] = useState('')

  useEffect(()=>{
    filter.setList(listSkills)
  },[listSkills, currentFilter])
  
  filter.filter()

  return (
    <div>
      <ul className='dashboard-skills__filter-list'>
        <li className='dashboard-skills__filter-item'>
          <button onClick={() => filter.setFilter('All')} className='dashboard-skills__filter-btn'>All</button>
        </li>
        <li className='dashboard-skills__filter-item'>
          <button onClick={() => filter.setFilter('Backend')} className='dashboard-skills__filter-btn'>Backend</button>
        </li>
        <li className='dashboard-skills__filter-item'>
          <button onClick={() => filter.setFilter('Frontend')} className='dashboard-skills__filter-btn'>Frontend</button>
          </li>
        <li className='dashboard-skills__filter-item'>
          <button className='dashboard-skills__filter-btn'>Other</button>
        </li>
      </ul>
      <ul className='list-skill__list'>
      {!(listSkills.length == 0) ?
        filter.filter().map((skill, index) => (
          <SkillElement {...skill} key={index}></SkillElement>
        ))
        
        :
        <div> No hay habilidades almacenadas</div>
      }
      { !(listSkills.length == 0) && <div>no hay</div>}
      </ul>
    </div>
  )
}
