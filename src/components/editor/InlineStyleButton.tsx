import useEditor from "@root/hooks/useEditor"
import React from "react"

export default function InlineStyleButton({
  children,
  isActive,
  style, 
}:{
  children: React.ReactNode
  isActive?: boolean,
  style: string
}) {

  const {setInlineStyle} = useEditor()

  return <>
    <button className='w-10 h-10 hover:bg-gray-200' onClick={(e) => setInlineStyle(style)}>
      {children}
    </button>
  </>;
  
}
