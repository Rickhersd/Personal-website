import Link from 'next/link';
import React, {Suspense} from 'react'
import Content from './Content';

export default async function page() {

  return (
    <div>
        <Link href='/es'>home</Link>
        <React.Suspense fallback={<p>cargando...</p>}>
            {/* @ts-expect-error */}
            {<Content  ></Content> }
        </React.Suspense>
    </div>
  )
}

