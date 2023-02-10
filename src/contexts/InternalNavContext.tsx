'use client'

import React, {
  useState, 
  useContext,
  createContext,
  ReactNode,
  useMemo,
  useCallback,
} from 'react'

import { useRouter, usePathname } from 'next/navigation'

interface internalNavI {
  setUrl: (path: string) => void
}

const InternalNavContext = createContext<internalNavI | undefined>(undefined)
const defaultContext: internalNavI = { setUrl: _ => {}}

export const useInternalNav = () => useContext(InternalNavContext) ?? defaultContext


const InternalNavProvider = ({children}:{children:ReactNode}):JSX.Element => {
  if (checkPrevContextInstance()) return <>{children}</>
    
  function checkPrevContextInstance():boolean{
    return useContext(InternalNavContext)? true: false;
  }

  const [urlList, setUrlList] = useState<string[]>(['']);
  const router = useRouter();

  const rootPath:string = usePathname() ?? '' // = /dashboard/skills
  
  console.log(rootPath)

  const pushUrl = useCallback((newUrl:string) => {
    router.prefetch(newUrl == '' ? rootPath : rootPath + '/' + newUrl)
    setUrlList([...urlList, newUrl])
  }, []);

  const providervalue = useMemo(() => ({
    setUrl: pushUrl,
  }), [pushUrl]);
  

  function* generateUrls(urls:string[]){
    let index = 0;
    let path = rootPath
    console.log(index)

    while (index < urls.length){
      path = path.concat('/', urls[index])
      index = index + 1
      yield path
    }
  }

  return (
    <InternalNavContext.Provider value={providervalue}>
      <div className='internal-nav'>
        <nav>
        {((generator = generateUrls(urlList)) => urlList.map((path, index) => {
            let routepath:string = generator.next().value as string
            return (
              <div key={index}>
                <button  onClick={ _ => router.prefetch(routepath)}>{path != '' ? path: 'skill'}</button>
              </div>
              )
            }
          ))()
        }
        </nav>
        <div>
        {children}
        </div> 
      </div>
    </InternalNavContext.Provider>
  )
}

export default InternalNavProvider
