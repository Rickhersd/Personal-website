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
        <ProjectsForm></ProjectsForm>
        <TextEditor />   
      </EditorProvider>
    </div>
  )
}


