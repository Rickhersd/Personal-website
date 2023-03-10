import useEditor from "@root/hooks/useEditor";
import React from "react";

export default function HeaderStyleDropdown({
  children
}:{
  children: React.ReactNode
}){

  const {setBlockType, contextBlockType} = useEditor()

  const handleOnChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault;
    setBlockType(e.target.value)
  }

  return <>
    <select value={contextBlockType} onChange={handleOnChange}>
      {children}
    </select>
  </>
}
