'use client'

import React, {
  useState, 
  useContext,
  createContext,
  ReactNode,
  useMemo,
  useCallback,
  SetStateAction,
} from 'react'

import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'

interface internalNavI {
  setUrl: (path: string) => void
  setNavRootElement: (classname:string) => JSX.Element
  setPathroot?: (pathroot:string) => void
}

//context
const InternalNavContext = createContext<internalNavI | undefined>(undefined)
const defaultContext: internalNavI = {
  setUrl: _ => {}, 
  setNavRootElement: _ => <></>,
  setPathroot: _ => ''
}

//hook
export const useInternalNav = () => useContext(InternalNavContext) ?? defaultContext

//context provider
const InternalNavProvider = ({
  children, pathroot
}:{
  children:ReactNode,
  pathroot:string
}):JSX.Element => {
  if (checkPrevContextInstance()) return <>{children}</>
    
  function checkPrevContextInstance():boolean{
    return useContext(InternalNavContext)? true: false;
  }

  const [urlList, setUrlList] = useState<string[]>(['']);
  const router = useRouter();

  const rootPath:string = usePathname() ?? '' // = /dashboard/skills

  const pushUrl = useCallback((newUrl:string) => {
    router.push(newUrl == '' ? rootPath : rootPath + '/' + newUrl)
    setUrlList([...urlList, newUrl])
  }, []);

  const rootNavigation = (className:string):JSX.Element => {
    return <>
      <nav className={className}>
        <ul className={`${className}__list`}>
          {((generator = generateUrls(urlList)) => urlList.map((path, index) => {
              let pathRoot = generator.next().value
              return (
                <React.Fragment key={index}>
                  <li className={`${className}__item`}>
                    <Link className={`${className}__link`} href={pathRoot}>{path != '' ? path: 'skill'}</Link>
                  </li>
                  {index < urlList.length - 1 &&  <span className={`${className}__divider`}>{'>'}</span>}
                </React.Fragment>
              )
            })
            )()
          }
        </ul>
      </nav>
    </>
  } 

  const providervalue = useMemo(() => ({
    setUrl: pushUrl,
    setNavRootElement: rootNavigation,
  }), [pushUrl, rootNavigation]);
  

  const generateUrls = function* (urls:string[]):Generator<string>{
    let index:number = 0, path:string = pathroot;
    while (true){
      yield path.concat('/', urls[index])
      index++
    }
  }

  return (
    <InternalNavContext.Provider value={providervalue}>
      <div className='internal-nav'>
        <div>
        {children}
        </div> 
      </div>
    </InternalNavContext.Provider>
  )
}

export default InternalNavProvider
