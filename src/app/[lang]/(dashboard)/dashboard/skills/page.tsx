'use client'

import useFilter from "@root/hooks/useFilter";
import useGetDoc from "@root/hooks/useGetDoc";
import { Skill } from "@root/models/skills";
import Link from "next/link";
import { useEffect } from "react";
import AddSkillBtn from "./add/addSkillBtn";
import SkillElement from "./skill";

export default function ListSkills(){

  const [response, listSkills] = useGetDoc('skills', Skill)
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
