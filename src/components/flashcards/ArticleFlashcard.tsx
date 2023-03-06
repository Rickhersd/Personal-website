'use client'

import { motion, Variants } from "framer-motion";
import { Folder } from "react-feather";

const cardVariants: Variants = {
  hidden: {
    y: 300
  },
  show: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const Flashcard = ({
  title,
  description,
  category,
  date,
}:{
  title:string,
  description:string,
  category:string,
  date: string
}) => {

  return <>
  <motion.button 
    className="shadow flex flex-col justify-between text-left bg-white dark:bg-zinc-700"
    initial={'hidden'}
    variants={{cardVariants}}
    whileHover={{scale:1.05, boxShadow:'box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'}} 
    whileInView={'show'}
    viewport={{once: true, amount:0.8}}
  >
    <div className="flex flex-col justify-between">
      <img src='' className='aspect-video bg-slate-300' alt='Proyect-img'></img>
      <div className="p-3 sm:p-4 gap-3">
        <h3 className="text-3xl font-semibold text-gray-900 dark:text-zinc-100">{title}</h3>
        <p className="text-base sm:text-lg py-2">{description}</p> 
      </div>
    </div>
    <div className="flex flex-row justify-between w-full p-3 sm:p-4">
      <div>12/12/2002</div>
      <h6 className="ml-auto pl-2 text-sm font-extrabold items-center tracking-wide flex flex-row gap-2">
        <Folder className="text-blue-500"></Folder>
        {category.toUpperCase()}
      </h6>
    </div>
  </motion.button>
  </>
}

export default Flashcard;