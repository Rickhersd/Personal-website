import Navbar from '@root/components/layout/navbar'
import Footer from '@root/components/layout/footer'
import React from 'react'
import { AnimatePresence } from 'framer-motion'
import TransitionProvider from '@root/contexts/TransitionContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {<Navbar></Navbar>}
      <TransitionProvider>
      {children}  
      </TransitionProvider>
      <Footer></Footer>
    </>
  )
}
