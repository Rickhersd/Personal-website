'use client'

import React from 'react'
import TextEditor from '@root/components/TextEditor';
import useEditor from '@root/hooks/useEditor';
import ProjectsForm from '@root/components/forms/ProjectsForm';

export default function page() {

  const {EditorProvider} = useEditor()
  
  return (
    <div className='px-8 py-4 '>
      <EditorProvider>
        <h2 className='text-3xl mt-8'>Crear</h2>
        <ProjectsForm className='mt-4' />
        <h2 className='text-2xl mt-8'>Contenido</h2>
        <TextEditor className='mt-4'/>   
      </EditorProvider>
    </div>
  )
}


