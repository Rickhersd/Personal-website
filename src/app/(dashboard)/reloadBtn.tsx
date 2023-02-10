'use client'

import React from 'react'
import { useTheme } from 'next-themes';

export default function ThemeChangerBtn({children}:{children:React.ReactNode}) {

  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    console.log('hola')
    setTheme(theme != 'light'? 'light' : 'dark')
  }

  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  )
}
