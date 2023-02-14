import { useInternalNav } from '@root/contexts/InternalNavContext'
import React from 'react'
import PlusIcon from '@root/svgs/plus-circle.svg'

export default function AddSkillBtn() {

  const {setUrl} = useInternalNav()

  return (
    <li className='inline-block w-24 h-28 list-none'>
      <button onClick={() => setUrl('add')} 
        className="bg-gray-300 rounded border-solid border-2 border-gray-400 flex flex-col justify-center items-center cursor-pointer w-24 h-28 hover:ring-1 hover:ring-slate-700"
        > 
        <PlusIcon className='w-9 h-9 fill-gray-400'></PlusIcon> 
      </button>
    </li>
  )
}
