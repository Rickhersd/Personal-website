import AboutMeResume from "@root/components/sections/AboutMeResume";
import BackendService from "@root/components/sections/BackendServices";
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
        <main className="w-full">
          <HeaderSection></HeaderSection>
          <AboutMeResume></AboutMeResume>
          <FrontendService></FrontendService>
          <BackendService></BackendService>
          <PortfolioSection></PortfolioSection>
          <BlogSection ></BlogSection>
        </main>
      </PageWrapper>
    </>
  )
}
