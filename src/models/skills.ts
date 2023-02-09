export default class SkillClass {

  name:string;
  width:number;
  height:number;
  path:string;
  svgFill:string;
  description:string;

  constructor(name:string, width:number, height:number, path:string, svgFill:string, description:string){
    this.name = name;
    this.width = width;
    this.height = height;
    this.path = path;
    this.svgFill = svgFill;
    this.description = description;
  }

}

export class Skill{

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

  static getCollectionID():string {
    return "skills"
  }
}