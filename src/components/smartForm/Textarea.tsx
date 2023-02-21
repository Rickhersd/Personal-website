'use client'

import { UseFormRegister, FieldValues } from "react-hook-form";

export default function Textarea({ 
  register, 
  name, 
  options,
  className,
  rows,
  ...rest 
}:{
  register?: UseFormRegister<FieldValues>,
  name: string, 
  className: string,
  rows: number,
  options?: {}
}) {
  return <>
    <textarea {...register?.(name, options)} {...rest} className={className} rows={rows}></textarea>
  </>;
}