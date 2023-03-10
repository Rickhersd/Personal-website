import useEditor from "@root/hooks/useEditor";
import React from "react"

export default function BlockStyleButton({
  children,
  blockType
}:{
  children: React.ReactNode,
  blockType: string
}) {

  const {setBlockType, contextBlockType} = useEditor();

  const handleOnClick = (e:React.MouseEvent) => {
    e.preventDefault;
    setBlockType(blockType)
  }

  const isActive = blockType === contextBlockType ? 'bg-gray-300' : ''

  return (
    <button className={`border px-4 py-2 ${isActive}`} onClick={handleOnClick}>
      {children}
    </button>
  ); 
}

