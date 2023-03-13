import AboutMeResume from "@root/components/sections/AboutMeResume";
import BackendService from "@root/components/sections/BackendServices";
import FrontendService from "@root/components/sections/FrontendServices";
import PortfolioSection from "@root/components/sections/PortfolioSection";
import { PageWrapper } from "@root/contexts/TransitionContext";
import FetchDoc from "@root/hooks/FetchDoc";
import Article from "@root/models/article";
import { limit, orderBy } from "firebase/firestore";
import React, { Suspense } from "react";
import BlogSection from "../../../components/sections/BlogSection";
import HeaderSection from "../../../components/sections/HeaderSection";

async function getMostRecentArticles() {
  return FetchDoc('articles', Article, null, orderBy('publishedOn', 'desc'), limit(3));
}

export default function Home() {

  const recentArticles = getMostRecentArticles()

  return (
    <>
      {/* <PageWrapper key={'home-page'}> */}
        <main className="w-full">
          <HeaderSection></HeaderSection>
          <AboutMeResume></AboutMeResume>
          <FrontendService></FrontendService>
         
          <BackendService></BackendService>
          <PortfolioSection></PortfolioSection>
          <Suspense fallback={<div>Loading...</div>}>
            {/*@ts-expect-error*/}
            <BlogSection promise={recentArticles}></BlogSection>
          </Suspense>
        </main>
      {/* </PageWrapper> */}
    </>
  )
}
