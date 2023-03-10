'use client'

import React from 'react'
import useEditor from '@root/hooks/useEditor';
import useAddDoc from '@root/hooks/useAddDoc';
import { ref, uploadBytesResumable } from "firebase/storage";
import { convertToRaw, Editor } from 'draft-js';
import { draftToMarkdown } from 'markdown-draft-js';
import { RegisterOptions, SubmitHandler, useForm, UseFormRegister } from 'react-hook-form';
import { Timestamp } from 'firebase/firestore';
import { storage } from '@root/ts/firebase';
import Submit from '../smartForm/Submit';

interface IFormInput {
  title: string;
  author: string,
  imageFilePath: string, 
  category: string
  summary: string,
  contentFile: string
}

export default function ProjectsForm() {

  const {handleGetContent} = useEditor();

  const { register, handleSubmit} = useForm({
    defaultValues: {
      title: '',
      author: '',
      imageFilePath: '',
      category: '',
      summary:'',
      contentFile: '',
    }
  });

  const [response, addDocument] = useAddDoc('articles')

  const onSubmit:SubmitHandler<IFormInput> = (data) => {
    
    const content =  handleGetContent()
    const rawObject = convertToRaw(content);
    const markdownString = draftToMarkdown(rawObject);

    uploadMarkdownFile(markdownString, formatUrlFile(data.title as string));
    addDocument({
      'title': data.title,
      'author': data.author,
      'contentFilePath': formatUrlFile(data.title as string), 
      'imageFilePath': '', 
      'tags': ['web', 'dev', 'portfolio'], 
      'category': data.category, 
      'summary': data.summary, 
      'publishedOn': Timestamp.fromDate(new Date(getCurrentDate()))
    })
  }

  const getCurrentDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    return yyyy + '-' + mm + '-' + dd;
  }

  const formatUrlFile = (url:string):string => {
    return url.toLocaleLowerCase().replace(' ', '-') 
  }

  const uploadMarkdownFile = (data: string, name:string):void => {

    const metadata = {
      contentType: 'text/markdown'
    };
    
    const file = new File([data], `blogs/${name}.md`);

    const markdownFileRef = ref(storage, `blogs/${name}.md`);
    const uploadTask  = uploadBytesResumable(markdownFileRef, file, metadata)

    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
        }
      }, 
      (error) => {
        switch (error.code) {
          case 'storage/unauthorized':
            console.log('unathorized')
            break;
          case 'storage/canceled':
            console.log('canceled')
            break;
          case 'storage/unknown':
            console.log('unexpecting error')
            break;
        }
          }, 
      () => console.log('upload completed')
    )  
  }

  return <>
    <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
      <Fieldset>
        <Label htmlFor="title">Titulo</Label>
        <Input type='text' name="title" register={register} options={{maxLength:96, required:true}}  />
      </Fieldset>
      <Fieldset>
        <Label htmlFor="author">Autor</Label>
        <Input type="text" name="author" register={register} options={{maxLength:96, required:true}} ></Input>
      </Fieldset>
      <Fieldset>
        <Label  htmlFor="skill__name">Resumen</Label>
        <Input type="text" name="summary" register={register} options={{maxLength:96, required:true}} ></Input>
      </Fieldset>
      <Fieldset>
        <Label htmlFor='category'>Category</Label>
        <select {...register('category')} className= "p-2 w-72 border border-gray-200 bg-white" >
          <option>Frontend</option>
          <option>Backend</option>
          <option>Other</option>
          <option>CMS</option>
        </select>
      </Fieldset>        
      <fieldset>
        <Submit className="ml-auto">Crear Articulo</Submit>
      </fieldset>
    </form> 
  </>
}

function Label ({
  children,
  htmlFor
}:{
  children:React.ReactNode,
  htmlFor: string
}){

  return <>
    <label className="text-lg min-w-[5rem]" htmlFor={htmlFor}>{children}</label>
  </>

}
function Fieldset ({children}:{children:React.ReactNode}){
  return <>
    <fieldset className="flex flex-row w-full gap-4 items-start">{children}</fieldset>
  </>
}

function Input ({
  register,
  options,
  name, 
  type
}:{
  register: UseFormRegister<{ title: string; author: string; imageFilePath: string; category: string; summary: string; contentFile: string; }>,
  options?: RegisterOptions,
  name: "summary" | "title" | "imageFilePath" | "author" | "category" | "contentFile",
  type: string
}){

  return <>
    <input 
      className="tx-lg  border border-gray-300 p-2 rounded-sm w-full"
      type={type}
      {...register(name, {...options})}
      ></input>
  </>

}


