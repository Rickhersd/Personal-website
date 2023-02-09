import ProjectsGroup from "./projectsGroup";
import { projectsList } from '../data/projects';

import { Link } from "react-router-dom";

import '../sass/_portfolio.scss';

import React from 'react'

export default function ProjectsSection() {
  return (
    <div>
      <div className="portfolio__header">
        <h1 className="portfolio__header-title">Projectos</h1>
        <Link to='projects' className="portfolio__header-anchor">Ver Todo...</Link> 
      </div>
      <ProjectsGroup
        dataList={projectsList}
      ></ProjectsGroup>
    </div>
  )
}
