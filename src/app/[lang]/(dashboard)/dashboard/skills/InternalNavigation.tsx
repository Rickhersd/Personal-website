'use client'
import { useInternalNav } from '@root/contexts/InternalNavContext'

export default function InternalNavigation() {

  const {setNavRootElement} = useInternalNav();

  return setNavRootElement('dashboard-subNav') 
}
