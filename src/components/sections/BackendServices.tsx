import React from "react";

import BackendBackground from "./servicesBackgrounds/BackendBackground";
import ListRender from "../ListRender";

import ServiceDescription from "../ServiceDescription";
import ButtonService from "../buttons/ServiceButton";
import IndexContext from "@root/contexts/IndexContext";

import HMTLIcon from "@root/svgs/HTML.svg"
import ReactIcon from "@root/svgs/React.svg"
import NextIcon from "@root/svgs/next.svg"
import TailwindIcon from "@root/svgs/Tailwind.svg"
import { AnimatePresence } from "framer-motion";
import AnimateWrapper from "../AnimateWrapper";

export default function BackendService() {

  return <>
    <section className="py-20 px-3">
      <IndexContext>
        <div className="flex flex-col m-auto relative max-w-7xl gap-4 sm:gap-8 sm:grid sm:grid-cols-5 sm:items-center">
          <div className="col-span-5 flex-col flex text-right">
            <h1 className="text-4xl sm:text-5xl text-slate-900 font-bold mt-8 dark:text-zinc-100">Desarrollador Backend</h1>
            <p className="text-base max-w-3xl sm:text-lg mt-2 sm:mt-4 ml-auto">
            Entre tantos lenguajes, para el Backend manejo principalmente Node.Js, Python y PHP. Con ellos puedo desarrollar sistemas de autenticacion, manejar cookies, integrar pasarelas de pagos, manipular Base de Datos y mucho más…
            </p>
          </div>
          <ul className="sm:mt-4 col-span-2 col-start-4 flex gap-4 h-full ml-auto">
            <ListRender className="">
              <ButtonService index={0} tag="NodeJs">
                <HMTLIcon className='w-12 sm:w-14 h-12 sm:h-14 '></HMTLIcon>
              </ButtonService>
              <ButtonService index={1} tag="Python">
                <ReactIcon className="w-12 sm:w-14 h-12 sm:h-14 "></ReactIcon>
              </ButtonService>
              <ButtonService index={2} tag="PHP" >
                <NextIcon className='w-12 sm:w-14 h-12 sm:h-14 '></NextIcon>
              </ButtonService>
              <ButtonService index={3} tag="Database">
                <TailwindIcon className='w-12 sm:w-14 h-12 sm:h-14 '></TailwindIcon>
              </ButtonService>
            </ListRender>
          </ul>
          <div className="col-span-3 row-span-2 col-start-1 row-start-2">
            <BackendBackground />
          </div>
          <div className="col-span-2 row-start-3 max-w-sm mt-auto ml-auto w-full h-full text-right relative">
            <AnimateWrapper>
              <ServiceDescription index={0} title={"Node JS"} className='absolute top-0 right-0' >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id nisi ligula. Fusce quis neque convallis, tempus neque vitae, euismod arcu. Curabitur fermentum porta porttitor. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
              </ServiceDescription >
              <ServiceDescription index={1} title={"Python"} className='absolute top-0 right-0'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id nisi ligula. Fusce quis neque convallis, tempus neque vitae, euismod arcu. Curabitur fermentum porta porttitor. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
              </ServiceDescription >
              <ServiceDescription index={2} title={"PHP"} className='absolute top-0 right-0'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id nisi ligula. Fusce quis neque convallis, tempus neque vitae, euismod arcu. Curabitur fermentum porta porttitor. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
              </ServiceDescription >
              <ServiceDescription index={3} title={"Bases de Datos Relacionales"} className='absolute top-0 right-0'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id nisi ligula. Fusce quis neque convallis, tempus neque vitae, euismod arcu. Curabitur fermentum porta porttitor. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
              </ServiceDescription >
            </AnimateWrapper>
          </div>
        </div>
      </IndexContext>
    </section>
  </>;
}
