import { Timestamp } from "firebase/firestore";

interface dataInterface {
  title:string,
  author: string, 
  slug:string, 
  imageFilePath:string, 
  tags:string[], 
  category:string, 
  summary: string,
  publishedOn:Timestamp | Date,
  state: 'unchecked' | 'checked'
}

export default class Article {

  id: string;
  author: string;
  title:string;
  slug: string; 
  imageFilePath:string;
  tags:string[];
  category: string;
  summary: string;
  publishedOn: Timestamp | Date;
  state: 'unchecked' | 'checked'
  
  constructor (id:string, data:dataInterface){
    this.id = id;
    this.author =  data.author;
    this.title = data.title;
    this.slug = data.slug;
    this.imageFilePath = data.imageFilePath;
    this.tags = data.tags;
    this.category = data.category;
    this.summary = data.summary;
    this.publishedOn = data.publishedOn;
    this.state = data.state;
  }

}