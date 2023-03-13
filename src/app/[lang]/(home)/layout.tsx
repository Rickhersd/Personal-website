import Navbar from '@root/components/layout/navbar'
import Footer from '@root/components/layout/footer'
import React from 'react'
import TransitionProvider from '@root/contexts/TransitionContext'
import Loading from './loading'

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: {
    lang:string
  }
}) {
  return (
    <>
      <Navbar lang={params.lang}></Navbar>
      <React.Suspense fallback={<Loading></Loading>}>
        <TransitionProvider>
        {children}  
        </TransitionProvider>
      </React.Suspense>
      <Footer></Footer>
    </>
  )
}
