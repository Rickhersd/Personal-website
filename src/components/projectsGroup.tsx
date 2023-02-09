import React from 'react'
import Project from '../models/project';
import ProjectCard from "./projectCard";

import './projectCard.scss';

interface projectGroupInterface {
  dataList: Array<Project>
}

export default function ProjectsGroup({dataList}:projectGroupInterface) {
  return (
    <div className='project-group'>
      {
        dataList.map((project, index) => (
          <ProjectCard
            key={index} 
            title={project.title} 
            urlPage={project.urlPage}
            description={project.description} 
            technologies={project.technologies}
          ></ProjectCard> 
        ))
      }
    </div>
  )
}
