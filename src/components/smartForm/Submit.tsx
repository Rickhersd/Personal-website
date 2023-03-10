import React from 'react'

export default function Submit({
  children,
  className
}:{
  children: string,
  className?: string
}) {
  return (
    <input className={`max-w-full sm:max-w-xs w-full rounded-lg bg-sky-600 font-medium block py-4 text-white ${className}`} type="submit" value={children} />
  )
}
