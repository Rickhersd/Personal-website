'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation';

export default function ReloadBtn({children}:{children:React.ReactNode}) {

  const pathName = usePathname();
  const router = useRouter();

  const handleOnClick = () => {
    localStorage.setItem("dark-mode", "true");
    router.refresh();
  }

  return (<div>
      <button onClick={handleOnClick}>
        {children}
      </button>
    </div>
  )
}
