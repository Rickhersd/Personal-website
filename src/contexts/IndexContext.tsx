'use client'

import React, {
  useState, 
  useContext,
  createContext,
  ReactNode,
  useMemo,
  useCallback,
  useEffect
} from 'react'

interface indexI {
  setIndex: (index: number) => void,
  currentIndex: number,
  increseIndex: () => void,
  decreseIndex: () => void,
  compareWithCurrent: (index: number) => boolean
}

//context with
const IndexContext = createContext<indexI | undefined>(undefined)
const defaultContext: indexI = {
  setIndex: _ => {}, 
  currentIndex: 0,
  increseIndex: () => {},
  decreseIndex: () => {},
  compareWithCurrent: _ => false
}

//hook


//context provider
const IndexProvider = ({
  children, autoShift
}:{
  children:ReactNode,
  autoShift?: {
    maxIndex: number,
    timer: number
  }
}):JSX.Element => {
  if (checkPrevContextInstance()) return <>{children}</>
    
  function checkPrevContextInstance():boolean{
    return useContext(IndexContext)? true: false;
  }

  const [[currentIndex, direction], setIndex] = useState([0, 0]);

  const increseIndex = useCallback(()=>{
    setIndex([currentIndex + 1, 1])
  },[currentIndex])

  const decreseIndex = useCallback(()=>{
    setIndex([currentIndex - 1, -1])
  },[currentIndex])

  const setNewIndex = useCallback((newIndex: number) => {
    setIndex([newIndex, Math.sign(newIndex - currentIndex)]);
  }, [currentIndex]);

  const compareWithCurrent = useCallback((index: number) => {
    return index === currentIndex
  }, [currentIndex])

  useEffect(()=>{
    if (autoShift == undefined) return
    currentIndex < autoShift.maxIndex? () => {} :  setNewIndex(0)
  }, [currentIndex])

  useEffect(() => {
    if(autoShift == undefined) return

    const interval = setInterval(() => {
      setNewIndex(currentIndex + 1)
    },autoShift.timer)
  
    return () => {
      clearInterval(interval)
    }
  }, [currentIndex, setNewIndex])

  const providervalue = useMemo(() => ({
    setIndex: setNewIndex, 
    currentIndex,
    increseIndex,
    decreseIndex,
    compareWithCurrent
  }), [setIndex, currentIndex, increseIndex, decreseIndex, compareWithCurrent],);

  return (
    <IndexContext.Provider value={providervalue}>
      {children}
    </IndexContext.Provider>
  )
}

const useIndex = () => ({...useContext(IndexContext) ?? defaultContext, IndexProvider})
export default useIndex;