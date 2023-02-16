import React from 'react'
import Link from 'next/link'

export default function AnchorItem({
  children, 
  className,
  href
}:{
  children:React.ReactNode,
  className?:string,
  href?: string
}) {

  return <>
    <Link className={className} href={href as string}>
      {children}
    </Link>
  </>
}