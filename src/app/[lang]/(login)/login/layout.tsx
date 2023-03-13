
import React, { Suspense } from 'react'
import TransitionProvider from '@root/contexts/TransitionContext'

export default function RootLayout({
  children,

}: {
  children: React.ReactNode
 
}) {

  return (
    <>
      <p>hola este contenido es del layout</p>
        {children}  
    </>
  )
}