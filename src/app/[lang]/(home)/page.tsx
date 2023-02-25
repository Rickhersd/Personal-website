import LanguageBtn from "@root/components/buttons/Language_Button";
import { PageWrapper } from "@root/contexts/TransitionContext";
import React from "react";
import BlogSection from "../../../components/BlogSection";
import HeaderSection from "../../../components/HeaderSection";
import ProjectsSection from "../../../components/ProjectsSection";
import Services from "../../../components/services";

export default function Home() {
  return (
    <>
      <PageWrapper key={'home-page'}>
        <main className="w-full m-auto mt-40 sm:mt-32">
          <HeaderSection></HeaderSection>
          {<Services></Services>}   
          {/*<BlogSection ></BlogSection>*/}
        </main>
      </PageWrapper>
    </>
  )
}
