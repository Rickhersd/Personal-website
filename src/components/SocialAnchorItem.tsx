import React from 'react'
import Link from 'next/link'

export default function SocialAnchorItem({
  children, 
  svgEl,
  className,
  href
}:{
  children:React.ReactNode,
  svgEl: JSX.Element,
  className?:string,
  href?: string
}) {

  return <>
    <a className={className} href={href as string}>
      {svgEl}
      {children}
    </a>
  </>
}