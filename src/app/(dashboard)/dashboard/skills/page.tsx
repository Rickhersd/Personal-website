'use client'

import useGetDoc from "@root/hooks/useGetDoc";
import { Skill } from "@root/models/skills";
import StringToJSX from "@root/ts/stringToJSXParser";
import Link from "next/link";

export default function ListSkills(filter:string) {

  const [response, listSkills] = useGetDoc('skills', Skill)

  return (
    <div>
      <h2>Lista de habilidades:</h2>
      <ul className='list-skill__list'>
      {!(listSkills.length == 0) ?
        listSkills.map((skill, index) => (
          (
            <li key={index} className='list-skill__item'>
              <Link href={`/dashboard/skills/${skill.id}`} className="list-skill_item_anchor">
                <StringToJSX domString={skill.svg_image} className="list-skill__item-image"></StringToJSX>
                <h4 className='list-skill__item-name'>{skill.name}</h4>
              </Link>
            </li>
          )
        ))
        :
        <div> No hay habilidades almacenadas</div>
      }
      </ul>
    </div>
  )
}
