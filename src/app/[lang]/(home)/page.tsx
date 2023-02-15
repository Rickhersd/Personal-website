import React from "react";
import BlogSection from "../../../components/BlogSection";
import HeaderSection from "../../../components/HeaderSection";
import ProjectsSection from "../../../components/ProjectsSection";
import Services from "../../../components/services";

export default function Home() {
  return (
    <>
      <main className="lg:container mx-auto">
        <HeaderSection></HeaderSection>
        <Services></Services>
        
        <BlogSection ></BlogSection>
      </main>
    </>
  )
}
