'use client'

import { AnimatePresence, motion, TargetAndTransition, VariantLabels, Variants } from 'framer-motion'
import React, { ReactNode } from 'react'

export function PageWrapper({
  children,
  key,
  exit,
  className,
}:{
  children:ReactNode,
  key:string | null | undefined
  exit?: VariantLabels | TargetAndTransition | undefined
  className?: string | undefined
}) {
  return(
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={className}
      key={key}>
      {children}
    </motion.div> 
  )
}

export default function TransitionProvider({
  children
}:{
  children:ReactNode
}) {
  return (
    <AnimatePresence mode='wait'>
      {children}
    </AnimatePresence>
  )
}
