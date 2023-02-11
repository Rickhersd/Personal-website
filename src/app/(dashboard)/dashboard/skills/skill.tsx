'use client'

import { useInternalNav } from "@root/contexts/InternalNavContext";
import StringToJSX from "@root/ts/stringToJSXParser";
import Link from "next/link";
import { Fragment } from "react";

type SkillsProps = {
  id:string,
  name:string,
  svg_image: string
}

export default function SkillElement({id, name, svg_image}:SkillsProps) {

  const {setUrl} = useInternalNav()

  return (
    <Fragment key={id}>
      <li className='list-skill__item'>
        <button onClick={() => setUrl(name)} className="list-skill__item-btn"> 
          <StringToJSX domString={svg_image} className="list-skill__item-image"></StringToJSX>
          <h4 className='list-skill__item-name'>{name}</h4>
        </button>
      </li>
    </Fragment>
  )
}