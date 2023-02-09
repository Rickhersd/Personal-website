import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Project from '../../models/project';
import useDatabase from '../../hooks/useDatabase';

function ProjectList() {

  const [projectsList, setProjectsList] = useState<Array<Project> >([]);
  const {response, getDocuments, deleteDocument} = useDatabase('proyects', Project)

  useEffect(() => {
    getDocuments().then(res => setProjectsList(res as Project[])); 
  },[])

  return (
    <div style={{width:"400px", margin:"auto", border: "1px solid gray"}}>
      <h2>All blogs List</h2>
      {projectsList.map((project)=> (
        <div key={project.id}>
          <p>Title : {project.title}</p>
          <p>Description: {project.description} </p>
          <p>Technologies: {project.technologies}</p>
          <Link to={"/project/"+project.id}>View</Link>
          <Link to={"/project/edit/"+project.id}>Edit</Link>
          <button onClick={() => deleteDocument(project.id)}>Borrar Proyecto</button>
        </div>          
      ))}
    </div>
  )
}

export default ProjectList;