'use client'

import React, { createRef, DragEvent, FormEvent, useState } from 'react'
import StringToJSX from '@root/ts/stringToJSXParser';
import useAddDoc from '@root/hooks/useAdd';


export default function AddSkill() {

  const [skillName, setSkillName] = useState<string | undefined>();
  const [skillDesc, setSkillDesc] = useState<string | undefined>();
  const [skillType, setSkillType] = useState<string | undefined>();
  const [svgContent, setSvgContent] = useState<string | undefined>('');

  const nameRef = createRef<HTMLInputElement>();
  const descriptionRef = createRef<HTMLTextAreaElement>();
  const typeRef = createRef<HTMLSelectElement>();
  const svgContentRef = createRef<HTMLTextAreaElement>();

  const [response, addDocument] = useAddDoc('skills')
  const handlerSubmit = (e:FormEvent) => {
    e.preventDefault();
    addDocument({
      'name': nameRef.current?.value,
      'description': descriptionRef.current?.value,
      'type': typeRef.current?.value,
      'svg_image': svgContentRef.current?.value
    })
  }

  function handleDrop(e:DragEvent) {
    const files = e.dataTransfer.files;
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      if (svgContentRef.current != null){
        svgContentRef.current.value = reader.result as string
        setSvgContent(reader.result as string)
      }
    }, false);

    if(files) reader.readAsText(files[0]);
  }

  return (
    <div className='add-skill'>
      <div className='add-skill__form'>
        <form onSubmit={(e) => handlerSubmit(e)}>
          <fieldset>
            <label className="add-skill__form-label" htmlFor="skill__name">Name</label>
            <input onChange={() => setSkillName(nameRef.current?.value)} className="add-skill__form-field" ref={nameRef} type="text" name="skill__name"  maxLength={96} autoComplete="off" required></input>
          </fieldset>
          <fieldset>
            <label className="add-skill__form-label" htmlFor="skill__content">Descripcion</label>
            <textarea onChange={() => setSkillDesc(descriptionRef.current?.value)} className= "add-skill__form-field add-skill__form-textarea" ref={descriptionRef} name='skill__content' rows={5} maxLength={342} required></textarea>
          </fieldset>
          <fieldset>
            <label className="add-skill__form-label">Category</label>
            <select className= "add-skill__form-field" onChange={() => setSkillType(typeRef.current?.value)} ref={typeRef}>
              <option>Frontend</option>
              <option>Backend</option>
              <option>Other</option>
              <option>CMS</option>
            </select>
          </fieldset>
          <fieldset>
            <label className="add-skill__form-label" htmlFor="skill__content">SVG Code</label>
            <textarea
              onDrop={(e) => handleDrop(e)}
              onDragEnter={(e) => {
                e.preventDefault()
                e.stopPropagation()
              }}
              onDragLeave={(e) => {
                e.preventDefault()
                e.stopPropagation()
              }}
              onDragOver={(e) => {
                e.preventDefault()
                e.stopPropagation()
              }} 
              onChange={() => setSvgContent(svgContentRef.current?.value)} 
              className= "add-skill__form-field add-skill__form-textarea" ref={svgContentRef} name='skill__content' rows={5} required></textarea>
          </fieldset>
          <fieldset>
            <input id="submit-btn" className= "add-skill__form-submitBtn" type="submit" value="ADD"></input>
          </fieldset>
        </form>
      </div>
      <div className="add-skill__preview">
        <div className="add-skill__preview-card"> 
          <h1 className="add-skill__preview-title">Preview</h1>
          {/* <StringToJSX domString={svgContent as string} className="add-skill__preview-image"></StringToJSX> */}
          <div className="add-skill__preview-info">
            <div className="add-skill__preview-info-name">{skillName}</div>
            <div className="add-skill__preview-info-description">{skillDesc}</div>
            <div className="add-skill__preview-info-type">{skillType}</div>
          </div>
        </div>
      </div>
    </div>
  )
}