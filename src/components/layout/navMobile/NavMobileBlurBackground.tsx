'use client'

import { motion, Variants } from "framer-motion"

export default function NavMobileBlurBackground ({
  handleClick
}:{
  handleClick: () => void
}){

  const variants:Variants = {
    closed: {
      backdropFilter: "blur(0px)",
      display: 'none'
    },
    opened: {
      backdropFilter: 'blur(3px)',
      display: 'block'
    }
  }

  return <>
    <motion.div 
      className='min-h-screen w-screen top-0 fixed right-0 bg-[#00000099]'
      variants={variants}
      onClick={() => handleClick()}
    ></motion.div>
  </>
}
