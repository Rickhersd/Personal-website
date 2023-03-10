import React from "react"

export default function BlockStyleDropdownOption({
  children,
  value
}:{
  children: React.ReactNode,
  value:string
}) {

  return <>
    <option value={value}>
      {children}
    </option>
  </> 
}