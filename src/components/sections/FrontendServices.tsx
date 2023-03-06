import React from "react";

import FrontendBackground from "./servicesBackgrounds/FrontendBackground";
import ListRender from "../ListRender";

import ServiceDescription from "../ServiceDescription";
import ButtonService from "../buttons/ServiceButton";
import IndexContext from "@root/contexts/IndexContext";

import HMTLIcon from "@root/svgs/HTML.svg"
import ReactIcon from "@root/svgs/React.svg"
import NextIcon from "@root/svgs/next.svg"
import TailwindIcon from "@root/svgs/Tailwind.svg"
import FirebaseIcon from "@root/svgs/Firebase.svg"
import WorldpressIcon from "@root/svgs/Worldpress.svg"
import AnimateWrapper from "../AnimateWrapper";

export default function FrontendService() {

  return <>
    <section className="py-20 px-3">
      <IndexContext>
        <div className="flex flex-col sm:grid sm:col-span-4 lg:grid-cols-5 m-auto relative max-w-7xl gap-4 lg:gap-0">
          <div className="col-span-5 flex-col flex">
            <h1 className="text-4xl sm:text-5xl text-slate-900 font-bold mt-8 dark:text-zinc-100">Desarrollador Frontend</h1>
            <p className="text-base max-w-2xl sm:text-lg mt-2 sm:mt-4">
            Soy capaz de maquetar y estilizar cualquier diseño o apartado visual, así como integrar desde las funcionalidades mas simples a complejas. Actualmente, me centro en el desarrollo de SPA’s con React y en App’s con SSR con Next.js
            </p>
          </div>
          <ul className="sm:mt-4 sm:col-span-1 lg:col-span-2 flex flex-row sm:flex-col lg:flex-row gap-4">
            <ListRender className="">
              <ButtonService index={0} tag="Basicos">
                <HMTLIcon className='w-10 lg:w-14 h-10 lg:h-14 '></HMTLIcon>
              </ButtonService>
              <ButtonService index={1} tag="Resposinve Design">
                <ReactIcon className="w-10 lg:w-14 h-10 lg:h-14 "></ReactIcon>
              </ButtonService>
              <ButtonService index={2} tag="React Apps" >
                <NextIcon className='w-10 lg:w-14 h-10 lg:h-14 '></NextIcon>
              </ButtonService>
              <ButtonService index={3} tag="Backend Serveless">
                <TailwindIcon className='w-10 lg:w-14 h-10 lg:h-14 '></TailwindIcon>
              </ButtonService>
              <ButtonService index={4} tag="Next Apps">
                <FirebaseIcon className='w-10 lg:w-14 h-10 lg:h-14 '></FirebaseIcon>
              </ButtonService>
              <ButtonService index={5} tag="CMS">
                <WorldpressIcon className='w-10 lg:w-14 h-10 lg:h-14 '></WorldpressIcon>
              </ButtonService>
            </ListRender>
          </ul>
          <div className="col-span-3 row-span-1 lg:row-span-2">
            <FrontendBackground />
          </div>
          <div className="col-span-2 row-start-3 max-w-sm mt-auto relative w-full h-full">
            <AnimateWrapper>
              <ServiceDescription index={0} title={"Bases del Desarrollo Web"} className='absolute top-0 left-0'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id nisi ligula. Fusce quis neque convallis, tempus neque vitae, euismod arcu. Curabitur fermentum porta porttitor. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
              </ServiceDescription >
              <ServiceDescription index={1} title={"Aplicaciones con React"} className='absolute top-0 left-0'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id nisi ligula. Fusce quis neque convallis, tempus neque vitae, euismod arcu. Curabitur fermentum porta porttitor. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
              </ServiceDescription >
              <ServiceDescription index={2} title={"Aplicacioens con SSR "} className='absolute top-0 left-0'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id nisi ligula. Fusce quis neque convallis, tempus neque vitae, euismod arcu. Curabitur fermentum porta porttitor. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
              </ServiceDescription >
              <ServiceDescription index={3} title={"Estilizado y Maquetacion"} className='absolute top-0 left-0'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id nisi ligula. Fusce quis neque convallis, tempus neque vitae, euismod arcu. Curabitur fermentum porta porttitor. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
              </ServiceDescription >
              <ServiceDescription index={4} title={"Backend Serverless"} className='absolute top-0 left-0'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id nisi ligula. Fusce quis neque convallis, tempus neque vitae, euismod arcu. Curabitur fermentum porta porttitor. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
              </ServiceDescription >
              <ServiceDescription index={5} title={"Paginas con CMS"} className='absolute top-0 left-0'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id nisi ligula. Fusce quis neque convallis, tempus neque vitae, euismod arcu. Curabitur fermentum porta porttitor. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
              </ServiceDescription >
            </AnimateWrapper>
          </div>
        </div>
      </IndexContext>
    </section>
  </>;
}