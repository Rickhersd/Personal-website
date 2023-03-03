'use client'

import { useIndex } from '@root/contexts/IndexContext';
import { motion } from 'framer-motion';
import React from 'react'

export default function ButtonService({
  children,
  tag,
  index
}: {
  children: React.ReactNode;
  tag: string;
  index: number
}) {

  const {setIndex} = useIndex()

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2">
        <motion.button
          onClick={() => setIndex(index)}
          initial={{scale: 1}}
          whileFocus={{scale: 1.1, filter: 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))' }}
          whileHover={{ scale: 1.1 }}
          className="w-14 text-sm  h-14 rounded-full"
        >
          {children}
        </motion.button>
        <div className="w-14 h-14 text-xs break-words text-center flex">{tag}</div>
      </div>
    </>
  );
}