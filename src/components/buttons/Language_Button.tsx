'use client'

import { useDimensions } from '@root/hooks/useDimesions';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const itemVariants: Variants = {
  opened: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

export default function LanguageBtn() {

  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState('')
  const [isOpened, setIsOpened] = useState(false)

  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [toggleBtnSize] = useDimensions(toggleBtnRef );

  useEffect(()=>{
    const locale = pathname?.split('/')[0];
    const defaultLocale = 'es';
    setCurrentLang(locale ?? defaultLocale)
    
  },)

  const createPath = (locale:string) => {
    const path = pathname?.slice(4)
    return (`${locale}/${path}`)
  }

  return (
    <div className='relative w-28 h-8 flex items-center'>
      <motion.div 
        className='border absolute border-gray-300 top-0 left-0 w-28 overflow-hidden shadow-sm'
        initial={isOpened? 'opened' : 'closed'}
        animate={isOpened? 'opened' : 'closed'}
        variants={{
          opened: {
            maxHeight: `${30 * 3}px`, 
            borderRadius: '0.25rem',
          },
          closed: {
            maxHeight: `${30}px`,
            borderRadius: '1.5rem',
            transition: { type: "spring", stiffness: 300, damping: 24 }
          }
        }}
        ref={containerRef}
        >
        <motion.button 
          className="px-2 py-1 flex justify-between flex-row items-center text-sm text-gray-600 w-full" 
          onClick={ _ => setIsOpened(!isOpened)}
          ref={toggleBtnRef}
          > 
          Languages
          <motion.div
            className='inline-block '
            variants={{
              closed: { rotate: 180 },
              opened: { rotate: 0 }
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.50 }}
          >
            <svg className='fill-gray-600' width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </motion.div>
        </motion.button>
        <hr className='mx-2'></hr>
        <ul>
          <motion.li
            variants={itemVariants}
          > 
            <Link 
              className='px-2 py-1 block text-sm text-gray-600 hover:bg-cyan-200'
              href={createPath('en')}>English</Link>
          </motion.li>  
          <motion.li
            variants={itemVariants}
          > 
            <Link
              className='px-2 py-1 block text-sm text-gray-600' 
              href={createPath('es')}>Spanish</Link>
          </motion.li>
        </ul>
      </motion.div>
    </div>
  )
}
