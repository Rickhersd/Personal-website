'use client'

import { useInternalNav } from "@root/contexts/InternalNavContext";
import { useRouter } from "next/navigation";
import { createContext, Fragment, Key, useCallback, useContext, useEffect, useState } from "react";

type dropdownChildList = {
  dropdownLabel: string,
  opened: boolean
}

type dropdownValueProvider ={
  pushDropdown: (label:string, stateRef:boolean) => void
  dropdownChilds: Array<dropdownChildList>
}

const DropdownContext = createContext<dropdownValueProvider | undefined>(undefined);

const defaultContext:dropdownValueProvider = {
  pushDropdown: () => {},
  dropdownChilds: []
}


export const useDropdown = () => useContext(DropdownContext) ?? defaultContext;

//Provider
export function DropdownProvider({
  children,
}:{
  children:React.ReactNode,
}):JSX.Element{

  
  const [dropdownChilds, setDropdownChilds] = useState(Array<dropdownChildList>); 
  const pushDropdown = useCallback((label:string, stateRef:boolean) => {

    setDropdownChilds( [...dropdownChilds, {dropdownLabel: label, opened: stateRef}])
  }, [])

  return (
    <>
      <DropdownContext.Provider value={{pushDropdown, dropdownChilds}}>
        {children}
      </DropdownContext.Provider>
    </>
  )
}

export function DropdownLink({
  children,
  className,
  key
}:{
  children:React.ReactNode,
  className:string,
  key?:Key
}){

  const { setUrl } = useInternalNav();
  const [active, setActive] = useState()

  const handleClick = () => {
    
  }

  return (
    <Fragment key={key}>
      <li className="w-full">
        <button className={className} onClick={handleClick}>
          {children}
        </button>
      </li>
    </Fragment>
  )

}

export default function Dropdown({
  children,
  label,
  className,
}:{
  children:React.ReactNode,
  label:string,
  className:string
}) {

  const [opened, setOpened] = useState(false);
  const {pushDropdown, dropdownChilds} = useDropdown();

  useEffect(() => {
    pushDropdown(label, opened);
  }, [])

  useEffect(() => {
    for(let i = 0; i < dropdownChilds.length; i++){
      const mapList = new Map(Object.entries(dropdownChilds[i]))
      if(mapList.get('dropdownLabel') == label ){
        setOpened(dropdownChilds[i].opened)
      }
    }
  }, [dropdownChilds])

  const handleClick = () => {
    setOpened(!opened)
    for(let i = 0; i < dropdownChilds.length; i++){
      const mapList = new Map(Object.entries(dropdownChilds[i]))
      if(mapList.get('dropdownLabel') == label ){
        setOpened(dropdownChilds[i].opened)
      }
    }
  }

  return (
    <div className="w-full">
      <button className={className} onClick={ handleClick}>{label}</button>
      <ul className={`${opened? 'max-h-32':''} h-auto max-h-0 overflow-hidden transition-[max-height] duration-300 ease-in-out`}>
        {children}
      </ul>      
    </div>
  )
}