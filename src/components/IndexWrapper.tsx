import useIndex from '@root/contexts/IndexContext'
import React from 'react'

export default function IndexWrapper({
  children
}:{
  children: React.ReactNode
}) {

    const {IndexProvider} = useIndex()

  return (
    <IndexProvider>
      {children}
    </IndexProvider>
  )
}
