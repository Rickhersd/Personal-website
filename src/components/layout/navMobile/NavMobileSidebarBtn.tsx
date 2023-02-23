'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function NavMobileSidebarBtn({
  handleClick,
  className,
  children
}:{
  handleClick: () => void,
  className: string,
  children: React.ReactNode
}) {
  return <>
    <motion.button className={className} onClick={handleClick}>
      {children}
    </motion.button>
  </>
}
