import ProjectsGroup from "./projectsGroup";
import { projectsList } from '../data/projects';

import { Link } from "react-router-dom";

import '../sass/blog.scss';

import React from 'react'

export default function BlogSection() {
  return (
    <div style={{marginTop:'2rem'}} >
      <div  className="blog__header">
        <h1 className="blog__header-title">Blog</h1>
        <Link to='blog' className="blog__header-anchor">Ver Todo...</Link> 
      </div>
      <ProjectsGroup
        dataList={projectsList}
      ></ProjectsGroup>
    </div>
  )
}
