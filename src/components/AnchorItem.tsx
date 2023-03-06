'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function AnchorItem({
  children, 
  className,
  href
}:{
  children:React.ReactNode,
  className?:string,
  href?: string
}) {

  const currentSplitedPath = usePathname()?.split('/') as string[];
  const [currentHref, setCurrentHref] = useState<boolean>(false);

  useEffect(() => {
    if (href == undefined) return
    const splitedHref = href.split("/")
    
    splitedHref.forEach((href) => {
      setCurrentHref(currentSplitedPath.includes(href) ? true : false);
    })

  },[currentSplitedPath]);

  const focusClass = currentHref ? 'text-blue-500' : ''

  return <>
    <Link className={className + " hover:text-blue-500 transition-colors " + focusClass} href={href as string}>
      {children}
    </Link>
  </>
}