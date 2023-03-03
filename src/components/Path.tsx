'use client'

import { motion, Variants} from 'framer-motion'
import React from 'react'

export default function Path({
  id,
  d,
  fill,
  stroke, 
  strokeWidth, 
  strokeMiterlimit,
  fillRule,
  clipRule

}:{
  id: string,
  d: string,
  fill?:string,
  stroke?: string,
  strokeWidth?:string,
  strokeMiterlimit?:string
  fillRule?: "inherit" | "nonzero" | "evenodd"
  clipRule?: string 
}) {
  
  

  return <>
    <motion.path
      id={id}
      d={d}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeMiterlimit={strokeMiterlimit}
      fillRule={fillRule}
      clipRule={clipRule}
    />
  </>
}
