'use client'

import useGetDoc from "@root/hooks/useGetDoc";
import { Skill } from "@root/models/skills";
import Link from "next/link";
import SkillElement from "./skill";

export default function ListSkills(){

  const [response, listSkills] = useGetDoc('skills', Skill)

  return (
    <div>
      <ul className='dashboard-skills__filter-list'>
        <li className='dashboard-skills__filter-item'>
          <button className='dashboard-skills__filter-btn'>All</button>
        </li>
        <li className='dashboard-skills__filter-item'>
          <button className='dashboard-skills__filter-btn'>Backend</button>
        </li>
        <li className='dashboard-skills__filter-item'>
          <button className='dashboard-skills__filter-btn'>Frontend</button>
          </li>
        <li className='dashboard-skills__filter-item'>
          <button className='dashboard-skills__filter-btn'>Other</button>
        </li>
      </ul>
      <ul className='list-skill__list'>
      {!(listSkills.length == 0) ?
        listSkills.map((skill, index) => (
          <SkillElement {...skill} key={index}></SkillElement>
        ))
        :
        <div> No hay habilidades almacenadas</div>
      }
      </ul>
    </div>
  )
}
