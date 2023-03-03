'use client'

import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import frontendData from "@root/data/ServicesDescriptionEs.json"
import { useIndex } from "@root/contexts/IndexContext";

export default function ServiceDescription(){

  const {currentIndex} = useIndex();

  return <>
    <AnimatePresence mode="wait">
      <motion.div
        key={frontendData[currentIndex].id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 10 } }}
        style={{ translateY: "0px" }}
      >
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-zinc-100">{frontendData[currentIndex].title}</h2>
          <p className="pt-2 pb-4 text-lg">{frontendData[currentIndex].description}</p>
        </div>
        <ul className="flex flex-row gap-2">
          {frontendData[currentIndex].technolgies.map((tech, index) => {
            const delay = 0.1 * index;
            return (
              <motion.li
                className="border-2 rounded-full border-gray-500 text-sm px-3 py-1"
                initial={{ opacity: 0, translateY: "10px" }}
                animate={{
                  opacity: 1,
                  translateY: "-0px",
                  transition: { delay: delay }
                }}
                custom={delay}
                key={index}
              >
                {tech}
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </AnimatePresence>
  </>;
}