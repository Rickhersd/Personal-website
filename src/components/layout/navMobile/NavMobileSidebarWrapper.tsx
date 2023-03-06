'use client'

import { motion, Variants } from 'framer-motion'
import React from 'react'

export default function NavMobileSidebarWrapper({
  className,
  children,
}:{
  className:string,
  children: React.ReactNode
}) {

  const variants:Variants = {
    opened: {
      clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 40,
      }
    },
    closed: {
      clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  }

  return <>
    <motion.div 
      className={className}
      variants={variants}
      >{children}
      </motion.div>
  </>
    
}
