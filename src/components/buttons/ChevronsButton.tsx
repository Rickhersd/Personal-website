'use client'

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight } from "react-feather"


export default function ChevronsAboutMeBtn (){

  const [isHover, setIsHover] = useState(false)

  const variants:Variants = {
    idle:{
      opacity: 1,
      translateX: '0px',
      
    },
    hover: (delay) => ({
      opacity: [1, 0, 0, 1],
      translateX: ['0px','10px','-10px','0px'],
      scale: [1, 0.9, 0.9, 1],
      transition:{
        duration: 1,
        times:[0, 0.3, 0.31, 0.65],
        repeat: Infinity,
        delay: delay
      }
    }),
  }

  const delay1 = 0.1, delay2 = 0.30

  return <>
    <Link href='about' 
      className='inline-block '
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      <motion.div
        animate={isHover? 'hover' : 'idle'}
        className='align-center no-wrap relative text-blue-500 px-4 py-2 rounded-full flex flex-row-reverse gap-2' 
        >
        <div className='flex flex-row -right-8'>
          <motion.span variants={variants} custom={delay2} className='w-2'>
            <ChevronRight  className='w-5' ></ChevronRight>
          </motion.span>
          <motion.span variants={variants} custom={delay1}>
            <ChevronRight className='w-5'></ChevronRight>
          </motion.span>
        </div>
        <div className='relative w-10'>
          <motion.p
            className='bg-zinc-300 dark:bg-zinc-900 absolute top-0 w-20 left-2 py-0 px-0 text-lg'
            variants={{
              idle: {
                translateX:'10px',
                translateY: '-5%'
              },
              hover:{
                translateX:'-40px',
                translateY: '-5%',
                transition: {
                  type:'spring',
                  stiffness: 300,
                  damping: 20
                }
              }
            }}>
            Sobre mi
          </motion.p>
        </div>
      </motion.div>
    </Link>
  </>
}