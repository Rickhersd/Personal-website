import Navbar from '@root/components/layout/navbar'
import Footer from '@root/components/layout/footer'
import React from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {<Navbar></Navbar>}
      <main>
      {children}  
      </main>
      <Footer></Footer>
    </>
  )
}
