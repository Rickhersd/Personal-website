import React from "react";
import { useForm } from "react-hook-form";

export default function Form({ 
  defaultValues, 
  children, 
  onSubmit,
  className,
}:{
  defaultValues: {}, 
  children: React.ReactNode, 
  onSubmit: () => void,
  className?: string
}) {
  const methods = useForm(defaultValues);
  const { handleSubmit, register } = methods;

  console.log(methods.register)
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      {React.Children.map(children, child => {
        if (!React.isValidElement(child))return child;
        return (child).props.name 
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: () => (methods.register),
                key: child.props.name
              }
            })
          : child;
       })}
    </form>
  );
}