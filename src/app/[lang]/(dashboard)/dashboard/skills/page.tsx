'use client'

import useFilter from "@root/hooks/useFilter";
import useGetDoc from "@root/hooks/FetchDoc";
import { useEffect } from "react";
import AddSkillBtn from "./add/addSkillBtn";
import SkillElement from "@root/components/SkillElement";
import Skill from "@root/models/skills";

export default async function ListSkills(){

  const listSkills = await useGetDoc('skills', Skill)
  const [currentFilter, filter] = useFilter(listSkills)

  useEffect(()=>{
    filter.setList(listSkills)
    console.log(filter.filter())
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
      { !(listSkills.length == 0) && <AddSkillBtn></AddSkillBtn>}
      </ul>
    </div>
  )
}
