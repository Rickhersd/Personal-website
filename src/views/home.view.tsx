import React from "react";
import Services from "../components/services";
import Footer from "../components/footer";
import ProjectsSection from "../components/ProjectsSection";
import BlogSection from "../components/BlogSection";
import HeaderSection from "../components/HeaderSection";

const Home = () => {
  return (
    <div>
      <HeaderSection></HeaderSection>
      <Services></Services>
      <ProjectsSection></ProjectsSection>
      <BlogSection ></BlogSection>
      <Footer></Footer>
    </div>
  )
};

export default Home;