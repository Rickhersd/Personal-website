'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'react-feather';

export default function ProjectFlashcard({
  data
}:{
  data?: {}
}) {

  return <>
    <motion.button
      whileHover={{scale:1.05, boxShadow:'box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'}} 
      className="shadow flex flex-col justify-between bg-white dark:bg-zinc-700"
      >
      <div className="flex flex-col">
        <img src='' className='aspect-video' alt='Proyect-img'></img>
        <div className="p-3 sm:p-4 text-left flex flex-col gap-3">
          <h3 className="text-3xl text-slate-900 dark:text-zinc-100 font-semibold">Web de Nanogramas</h3>
          <p className="text-lg">Los nanogramas son un tipo de juego japones muy parecido esteticamente a los sudocos que consiste en rellenar una cuadricula segun los numero marcados en los laterales y en la parte superioir</p> 
        </div> 
      </div>
      <h6 className="ml-auto pl-2 flex flex-row gap-2 items-center p-3 sm:p-4 text-sm font-extrabold tracking-wide "><Code className='text-blue-500'></Code> En desarrollo</h6>
    </motion.button>
  </>
}

/* <div className="project-card__btns-group">
    <button className="project-card__btns-badged"><span data-text="portfolio-project-status-in-progress">En desarrollo</span></button>
    <button onClick={() => showTechnologies()} className="project-card__btns-badged">Technologias </button>
  </div> */
