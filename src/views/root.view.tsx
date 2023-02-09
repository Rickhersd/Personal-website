import React from "react";
import ProjectsGroup from "../components/projectsGroup";
import Navbar from "../components/navbar";
import Services from "../components/services";
import Section from "../components/section";
import Footer from "../components/footer";
import ProjectsSection from "../components/ProjectsSection";
import BlogSection from "../components/BlogSection";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
};

export default Root;