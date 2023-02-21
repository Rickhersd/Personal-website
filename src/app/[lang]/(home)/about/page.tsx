
import GithubFlashCard from '@root/components/flashcards/GithubFlashCard';
import ListSkills from '@root/components/ListSkills';
import { PageWrapper } from '@root/contexts/TransitionContext';
import FetchDoc from '@root/hooks/FetchDoc';
import Skill from '@root/models/skills';
import { motion } from 'framer-motion'

import React, { Suspense } from 'react'


async function getGithubData() {
  const res = await fetch('https://api.github.com/users/Rickhersd');
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function getSkillSetData(){

  const res = await FetchDoc('skills', Skill)
  /*if (!res.ok) {
    throw new Error('Failed to fetch data');
  }*/
  return res;
}

export default async function Page() {

  //const dataSkillsSet = await getSkillSetData();
  //const dataGithubProfile = await getGithubData();

  return (
    <PageWrapper key='about-page' className='max-w-6xl m-auto flex flex-col gap-3'>
      <div className='grid grid-cols-6 gap-4'>
       {/* <Suspense fallback={<div>Loading...</div>}>   
          @ts-expect-error Server Component 
          
        </Suspense>*/}
        <GithubFlashCard ></GithubFlashCard>
        <div className='col-span-4 text-gray-700 rounded p-6'>
          <h1 className="text-center font-bold text-5xl text-gray-800"> About me</h1>
          <p className='text-lg leading-relaxed mt-4 mb-8'>Soy un Desarrollador Web Full Stack con amplios conocimientos en el diseño y desarrollo de aplicaciones web. Soy apasionado a la creación de increíbles efectos visuales e intuitivas y dinámicas experiencias de usuario, así como de ofrecer soluciones precisas y escalables a los problemas de cualquier proyecto.</p>
          <h2 className='text-3xl font-semibold text-gray-500 mt-6'>Un breve historia sobre mi</h2>
          <p className='text-lg leading-relaxed mt-4 mb-8'>Actualmente curso Ingeniería en Informática y cuando no estoy con la carrera, dedico mis horas al aprendizaje y práctica de tecnologías enfocadas al Desarrollo Web. Soy muy organizado con mi trabajo y estudios, muy detallista al resultado final de los proyectos que hago y me hace muy feliz de pasar todas las noches programando, con música y café.</p>
          <h1 className='text-3xl font-semibold text-gray-500 mt-6'>Aspiraciones</h1>
          <p className='text-lg leading-relaxed mt-4 mb-6'>Mi interés por este mundo nació desde muy pequeño y ya durante el bachillerato, como hobby programaba en Unity y Visual Studio utilizando C#. Por ahora estoy enfocado exclusivamente al desarrollo web, pero tras graduarme me especializaré en otras áreas de la programación como la Inteligencia Artificial o el Análisis de Datos.</p>
        </div>
      </div>
  
      
      {/*<Suspense fallback={<div>Loading...</div>}>   
        {/<ListSkills listSkills={dataSkillsSet}></ListSkills> 
      </Suspense>*/}
      
    </PageWrapper>
  )
}  