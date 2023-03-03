import Navbar from '@root/components/layout/navbar'
import Footer from '@root/components/layout/footer'
import React from 'react'
import TransitionProvider from '@root/contexts/TransitionContext'
import NavMobile from '@root/components/layout/navMobile/navMobile'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/*<div className='bg-white opacity-10 bg-pattern bg-4 w-full h-full fixed -z-50'></div>*/}
      {<Navbar></Navbar>}
      {/*<NavMobile></NavMobile>*/}
      <TransitionProvider>
      {children}  
      </TransitionProvider>
      {<Footer></Footer>}
    </>
  )
}
