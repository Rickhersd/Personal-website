export default class Skill{

  id: string;
  name:string;
  description: string;
  svg_image:string;
  type:string;

  constructor(id:string, obj:{name:string, description:string, svg_image:string, type:string}){
    this.id = id;
    this.name = obj.name;
    this.description = obj.description;
    this.svg_image = obj.svg_image;
    this.type = obj.type;
  }
}