import { PageWrapper } from '@root/contexts/TransitionContext'
import React from 'react'

export default function Page() {
  return <>
    <PageWrapper key={'contact-page'} >
      <div className='px-4'>
        <h1 className="text-center font-bold text-4xl sm:text-5xl mt-12 text-slate-800"> Contacto</h1>
        <p className="max-w-xl mx-auto mt-8 text-base sm:text-lg text-left sm:text-center text-slate-700">¿Te gustaría hablar? Siempre estoy abierto a nuevas oportunidades de trabajo o proyectos web, así que escríbeme si tienes algo en mente.</p>
        {/*<ContactForm className='m-auto max-w-2xl mt-8 sm:mt-10 flex flex-col justify-center gap-4 sm:gap-6'></ContactForm>*/}
      </div>
    </PageWrapper>
  </>
}
