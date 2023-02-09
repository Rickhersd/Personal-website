import Project from "../models/project";
import proyectsData from "./projectsData";

export const projectsList = proyectsData.map(
  (project) => new Project(project.id, {
    title: project.title, 
    state: "",
    description: project.description, 
    technologies: project.technologies, 
    urlPage: project.urlPage, 
    publishedOn: project.date})
);