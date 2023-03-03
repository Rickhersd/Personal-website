import AboutMeResume from "@root/components/sections/AboutMeResume";
import FrontendService from "@root/components/sections/FrontendServices";
import PortfolioSection from "@root/components/sections/PortfolioSection";
import { PageWrapper } from "@root/contexts/TransitionContext";
import React from "react";
import BlogSection from "../../../components/sections/BlogSection";
import HeaderSection from "../../../components/sections/HeaderSection";

export default function Home() {
  return (
    <>
      <PageWrapper key={'home-page'}>
        <main className="w-full mt-40 sm:mt-32">
          <HeaderSection></HeaderSection>
          <AboutMeResume></AboutMeResume>
          {<FrontendService></FrontendService>}
          {<PortfolioSection></PortfolioSection>} 
          {<BlogSection ></BlogSection>}
        </main>
      </PageWrapper>
    </>
  )
}
