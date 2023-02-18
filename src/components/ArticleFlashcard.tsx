'use client'

import { motion, Variants } from "framer-motion";

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

  return (
  <motion.button 
    className="shadow-lg rounded overflow-hidden"
    initial={'hidden'}
    whileInView={'show'}
    viewport={{once: true, amount:0.8}}
  >
    <img src='' className='w-full aspect-video bg-slate-300' alt='Proyect-img'></img>
    <div className="px-4 pb-4 pt-3">
      <h6 className="text-xs pb-2  text-gray-600 font-extrabold tracking-wide ">{date}</h6> 
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      <div className="font-normal py-2 text-gray-800">{description}</div> 
      <div className="w-full pt-4 flex items-center">
        <span className="w-full border  border-gray-300 h-0"></span>
        <h6 className="ml-auto pl-2 text-sm text-gray-600 font-extrabold tracking-wide ">{category.toUpperCase()}</h6> 
      </div>
    </div> 
  </motion.button>
  )
}

export default Flashcard;