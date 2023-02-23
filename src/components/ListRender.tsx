import React, { ReactElement } from 'react'

export default function ListRender({
  children, 
  className,
}:{
  children:React.ReactNode,
  className:string
}) {
  const getChildrenList = () => {
    const childrenList = React.Children.map(children, (child) => {
     return React.cloneElement(child as ReactElement<any, string>, {className: className})
    })
    return childrenList
  }

  const updateChildrenWithProps = getChildrenList()?.map((child, index) => {
    return (
    <li key={index}>
      {child}
    </li> 
    )
  })

  return <>
    {updateChildrenWithProps}
  </>
}
