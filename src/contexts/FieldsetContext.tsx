'use client'

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

const FieldsetContext = createContext<fieldsetInterface | undefined>(undefined)

interface fieldsetInterface{
  isEmpty: boolean,
  isBlur: boolean,
  setIsEmpty: Dispatch<SetStateAction<boolean>> | undefined,
  setIsBlur: Dispatch<SetStateAction<boolean>> | undefined
}

const defaultContext: fieldsetInterface = {
  isEmpty: false,
  isBlur: false,
  setIsEmpty: undefined,
  setIsBlur: undefined
}

export const useFieldset = () => useContext(FieldsetContext) ?? defaultContext

export default function FieldsetProvider({
  children
}:{
  children: React.ReactNode
}){

  const [isEmpty, setIsEmpty] = useState(true);
  const [isBlur, setIsBlur] = useState(true);
  const value = {isEmpty, isBlur, setIsEmpty, setIsBlur}

  return <>
    <FieldsetContext.Provider value={value}>
      <fieldset className='relative block border-gray-300 border rounded-lg'>
        {children}
      </fieldset>
    </FieldsetContext.Provider>
  </>
}