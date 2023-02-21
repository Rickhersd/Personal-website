import { ChangeEvent, useState } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { motion, Variants } from "framer-motion"
import { useFieldset } from "@root/contexts/FieldsetContext";

export default function Input ({ 
  register, 
  name, 
  options,
  className,
  ...rest 
}:{
  register: UseFormRegister<{
    name: string;
    email: string;
    subject: string;
    message: string;
}>,
  name: string, 
  className?: string,
  options?: {},
}) {

  const {isEmpty, isBlur, setIsEmpty, setIsBlur} = useFieldset();

  console.log(register)

  const handleChange = (e:ChangeEvent) => {
    const target = e.target as HTMLInputElement
    if ((target.value != '' && isEmpty == false) || isBlur == false) return; 
    setIsEmpty?.(!isEmpty)
  }

  const handleFocus = () => {
    setIsBlur?.(true)
  }

  const handleBlur = () => {
    setIsBlur?.(false)
  }

  //@ts-expect-error
  const nameInput = register(name, {...options, 
    onChange:(e) => handleChange(e),
    onBlur:() => handleBlur(),
  });

    console.log(name)
    console.log(options)

  return <>
    <motion.input
      className={className}
      name={nameInput?.name}
      ref={nameInput?.ref}
      onChange={nameInput?.onChange}
      onBlur={nameInput?.onBlur}
      onFocus={handleFocus}
      {...rest}/>
  </>;
}

