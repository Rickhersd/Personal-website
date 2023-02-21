'use client'

import React, { ChangeEvent, createContext, FocusEvent, FormEvent, ReactChild } from 'react'
import { useState } from 'react'

import emailjs from '@emailjs/browser';
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form';
import Input from './smartForm/Input';
import Form from './smartForm/Form';
import Textarea from './smartForm/Textarea';
import FieldsetProvider from '@root/contexts/FieldsetContext';
import Label from '@root/components/smartForm/Label'

const SERVICES_ID = "service_jp500qr";
const TEMPLATE_ID = "template_gsuoasf";
const PUBLIC_KEY = "sJ6q2p_owG6fKBxe7";

export default function ContactForm({
  className
}:{
  className:string
}) {

  const [isSending, setIsSending] = useState(false);
  const { register, handleSubmit} = useForm({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const handleOnSubmit = () => {
    if(isSending) return; 
    setIsSending(true);

    const form = document.querySelector('.contact__form') as HTMLFormElement;

    try{
      emailjs.sendForm(SERVICES_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then((res) => {
        setIsSending(false)
      })
      .then((err) => {
        setIsSending(false)
      })      
    } catch (err){ 
      setIsSending(false)
    }
  }

  const handleOnBlur = (e:FocusEvent) => {
    e.target.parentElement?.setAttribute('data-focused', 'false')
  }

  const loader = (
    <span className= "circle__loading circle__first">
      <span className= "circle__loading circle__second"></span>
    </span>
  )

  return <>
    <form onSubmit={handleSubmit(handleOnSubmit)} className={className}>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2'>
        <FieldsetProvider>
          <Label htmlFor="name">Nombre</Label>
          <Input 
            name='name'
            register={register} 
            className='w-full relative p-3 py-4 bg-transparent z-10 rounded-lg'
            options={{
              required: 'Error with name',
              maxLength : {
                value: 96,
                message: 'Esta muy largo el mensaje'
              }
            }}
          ></Input>
        </FieldsetProvider>
        <FieldsetProvider>
          <Label htmlFor="email">Correo Electrónico</Label>
          <Input 
            name='email' 
            register={register} 
            className='w-full relative px-3 py-4 bg-transparent z-10 rounded-lg'
            options={{
              required: 'Error with name',
              maxLength : {
                value: 96,
                message: 'Esta muy largo el mensaje'
              }
            }}
          ></Input>
        </FieldsetProvider>
      </div>
      <FieldsetProvider>
        <Label htmlFor="subject">Subject</Label>
        <Input 
          name='subject' 
          register={register} 
          className='w-full relative px-3 py-4 bg-transparent z-10 rounded-lg'
          options={{
            required: 'Error with name',
            maxLength : {
              value: 96,
              message: 'Esta muy largo el mensaje'
            }
          }}
        ></Input>
      </FieldsetProvider>
      <FieldsetProvider>
        <Label htmlFor="message">Tu mensaje</Label>
        <Textarea
          className="w-full resize-none rounded-lg border p-3 bg-transparent z-10 font-medium" 
          name='message'
          rows={7}
          options={{
            required:true,
            maxLength: {
              value: 342,
            message: ''
            }
          }}/>
      </FieldsetProvider>
      <fieldset className='flex flex-row-reverse justify-end items-center gap-2'>
        <label className='text-slate-700 text-base sm:text-lg'>He leido y acepto la politica de privacidad</label>
        <input type="checkbox"></input>
      </fieldset>
      <input className="max-w-full sm:max-w-xs w-full rounded-lg bg-sky-600 font-medium block m-auto py-4 text-white" type="submit" value="ENVIAR"></input>
    </form>
  </>
}

