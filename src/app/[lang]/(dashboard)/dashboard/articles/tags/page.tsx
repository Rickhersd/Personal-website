'use client'

import FetchDoc from '@root/hooks/FetchDoc';
import useAddDoc from '@root/hooks/useAdd'
import useDeleteDoc from '@root/hooks/useDelete';
import Tag from '@root/models/tag';
import React, { useState, useEffect } from 'react'
import { X } from 'react-feather';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Itag{
  id: string,
  tag: string
}

export default function Page() {

  const [resAdd, addDocument] = useAddDoc('tags')
  const [resDel, deleteDocument] = useDeleteDoc('tags')
  const [tagList, setTagList] = useState<Tag[]>([])

  useEffect(() => {
    FetchDoc('tags', Tag)
      .then(res =>  setTagList(res))
  },[resAdd, resDel])

  const {register, handleSubmit} = useForm({
    defaultValues:{
      id: '',
      tag: ''
    }
  });

  const handleOnSubmit:SubmitHandler<Itag> = (data):void => {
    addDocument({
      'id': data.tag.toLowerCase(),
      'tag': `#${data.tag}`
    })
  }

  return <>
    <div className='p-4'>
      <h1 className='text-4xl font-bold'>Etiquetas</h1>
      <h2 className='text-2xl mt-8'>Crear nueva</h2>
      <form className='mt-4 flex flex-col gap-3' onSubmit={handleSubmit(handleOnSubmit)}>
        <fieldset className='flex flex-row gap-3'>
          <label htmlFor='tag'>Etiqueta:</label>
          <input className="tx-lg  border border-gray-300 p-2 rounded-sm w-full after:content-['#'] after:left-0 after:top-0" type='text' {...register('tag')}/>
        </fieldset>
        <input className="text-white text-lg cursor-pointer font-medium bg-blue-500 px-6 py-2 rounded block ml-auto mt-2 " type='submit' value='Guardar'></input>
      </form>
      <h2 className='text-2xl mt-8'>Todas</h2>
      <ul className='mt-4 flex gap-2 flex-wrap'>
        {tagList.length != 0 ? tagList.map((tag, index) => (
          <li className='inline-flex py-2 px-4 flex-row gap-2 rounded-full select-none bg-blue-100 font-bold text-blue-500' key={index}>
            {tag.tag}
            <span className='text-blue-500 cursor-pointer' onClick={ _ => deleteDocument(tag.id)}><X></X></span>
          </li>
          )) 
          : 
          'No hay etiquetas guardadas'
        }
      </ul>
    </div>
  </>
}
