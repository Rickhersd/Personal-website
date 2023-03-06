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
      const element = child as ReactElement<any, string>
      return React.cloneElement(element, {className: element.props.className + " " + className})
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
