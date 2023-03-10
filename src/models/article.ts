import { Timestamp } from "firebase/firestore";

interface dataInterface {
  title:string,
  author: string, 
  readingTime: string,
  contentFilePath:string, 
  imageFilePath:string, 
  tags:string[], 
  category:string, 
  summary: string;
  publishedOn:Timestamp | Date
}

export default class Article {

  id: string;
  author: string;
  readingTime: string;
  title:string;
  contentFilePath: string; 
  imageFilePath:string;
  tags:string[];
  category: string;
  summary: string;
  publishedOn: Timestamp | Date;
  
  constructor (id:string, data:dataInterface){
    this.id = id;
    this.author =  data.author;
    this.readingTime = data.readingTime;
    this.title = data.title;
    this.contentFilePath = data.contentFilePath;
    this.imageFilePath = data.imageFilePath;
    this.tags = data.tags;
    this.category = data.category;
    this.summary = data.summary;
    this.publishedOn = data.publishedOn;
  }

}