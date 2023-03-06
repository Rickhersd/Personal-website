'use client'

import { motion } from "framer-motion";
import React from "react";
import { useIndex } from "@root/contexts/IndexContext";

export default function ServiceDescription({
  index,
  title,
  children,
  className
}:{
  index: number,
  title: string,
  children?: React.ReactNode,
  className?: string,
}){

  const {compareWithCurrent} = useIndex();

  return !compareWithCurrent(index) ?
     null
    : 
    <>
      <motion.div
        key={index}
        initial={{ opacity: 0, translateY: '-40px' }}
        animate={{ opacity: 1, translateY: '0px' }}
        exit={{ opacity: 0,translateY: '-40px', transition: { duration: 10 }}}
        className={className}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-zinc-100">{title}</h2>
        <p className="pt-0 sm:pt-2 pb-4 text-base sm:text-lg">{children}</p>
      </motion.div>
  </>;
}