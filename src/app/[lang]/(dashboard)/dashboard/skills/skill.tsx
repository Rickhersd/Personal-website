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
      <li className='inline-block w-24 h-28 list-none'>
        <button onClick={() => setUrl(name)} 
          className="bg-transparent gap-1 rounded border-dashed border border-gray-300 flex flex-col justify-center items-center cursor-pointer 
           w-24 h-28"> 
          <StringToJSX domString={svg_image} className='w-16 h-16'></StringToJSX>
          <h4 className='text-center'>{name}</h4>
        </button>
      </li>
    </Fragment>
  )
}