'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { useIndex } from '@root/contexts/IndexContext'

export default function G ({
  children,
  assignedIndex,
  id,
  clipPath
}:{
  children: React.ReactNode,
  assignedIndex: number | number[],
  id?: string,
  clipPath?: string 
}){

  const variants:Variants = {
    selected: {
      scale: 1.05,
      opacity: 1,
      filter: 'grayscale(0)'
    },
    idle: {
      scale: 0.8,
      opacity: 0.3,
      filter: 'grayscale(1)'
    }
  };

  const {compareWithCurrent} = useIndex()

  const checkSelected = ():boolean => {
    if (typeof assignedIndex === "number") return compareWithCurrent(assignedIndex)
    return checkServeralIndexex(assignedIndex)
  }

  const checkServeralIndexex = (indexes: number[]):boolean => {
    let response = false
    for (let i = 0; i < indexes.length; i++){
      if (compareWithCurrent(indexes[i])){
        response = true
        break;
      } 
    }
    return response
  }

  return <>    
    <motion.g
      initial={{ scale: 0.9, opacity: 0.7}}
      whileHover={'selected'}
      animate={checkSelected() ? 'selected' : 'idle'}
      transition={{
        type:'spring',
        stiffness: 300,
        damping: 15
      }}
      variants={variants}
      clipPath={clipPath}
    >
      {children}
    </motion.g>
  </>
}