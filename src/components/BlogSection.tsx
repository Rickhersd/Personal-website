

import Link from "next/link";

import React from 'react'

export default function BlogSection() {
  return (
    <div style={{marginTop:'2rem'}} >
      <div  className="blog__header">
        <h1 className="blog__header-title">Blog</h1>
        <Link href='blog' className="blog__header-anchor">Ver Todo...</Link> 
      </div>
   
    </div>
  )
}
