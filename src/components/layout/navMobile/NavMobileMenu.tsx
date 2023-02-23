'use client'

import { motion } from "framer-motion"
import { useState } from "react"
import { Menu } from "react-feather"
import NavMobileBlurBackground from "./NavMobileBlurBackground"
import NavMobileSidebarBtn from "./NavMobileSidebarBtn"
import NavMobileSidebar from "./NavMobileSidebar"

export default function NavMobileMenu(){

  const [isOpen, setIsOpen] = useState(false);

  return <>
    <motion.nav 
      initial={false}
      animate={isOpen? 'opened' : 'closed'}
       >
      <NavMobileBlurBackground  handleClick={() => setIsOpen(false)}/>
      <NavMobileSidebar handleClick={() => setIsOpen(false)} />
      <NavMobileSidebarBtn className='w-8 h-8' handleClick={() => setIsOpen(true)}>
        <Menu></Menu>  
      </NavMobileSidebarBtn>
    </motion.nav>

    
  </>
}