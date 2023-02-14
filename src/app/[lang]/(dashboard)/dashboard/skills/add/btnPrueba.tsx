'use client'

import { useInternalNav } from '@root/contexts/InternalNavContext'
import React from 'react'

export default function BtnPrueba() {

  const {setUrl} = useInternalNav()

  return (
    <>
      <button onClick={() => setUrl('react')}> agregar</button>
    </>
  )
}
