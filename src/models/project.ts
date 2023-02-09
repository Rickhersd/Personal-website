import { Timestamp } from "firebase/firestore";

export default class Project {

  id: string;
  title:string;
  description:string;
  state:string;
  technologies:string;
  urlPage: string;
  publishedOn: Timestamp | Date;
  
  constructor (id:string, objData:{title:string, state:string, description:string, technologies:string, urlPage:string, publishedOn:Timestamp | Date}){
    this.id = id;
    this.title = objData.title;
    this.description = objData.description;
    this.state= objData.state
    this.technologies = objData.technologies;
    this.urlPage = objData.urlPage;
    this.publishedOn = objData.publishedOn;
  }

  static getCollectionID():string {
    return "proyects"
  }
}