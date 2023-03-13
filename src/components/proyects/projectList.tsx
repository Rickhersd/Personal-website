import React, { useEffect, useState } from 'react';
import Project from '../../models/project';
import FetchDoc from '../../hooks/FetchDoc';

function ProjectList() {

  const [projectsList, setProjectsList] = useState<Array<Project> >([]);

  useEffect(() => {
    FetchDoc('projects', Project)
      .then(res => setProjectsList(res))
  },[])

  return (
    <div style={{width:"400px", margin:"auto", border: "1px solid gray"}}>
      <h2>All blogs List</h2>
      {projectsList.map((project)=> (
        <div key={project.id}>
          <p>Title : {project.title}</p>
          <p>Description: {project.description} </p>
          <p>Technologies: {project.technologies}</p>
        </div>          
      ))}
    </div>
  )
}

export default ProjectList;