interface Idata {
  tag:string
}

export default class Tag{
  id:string
  tag: string

  constructor(id:string, data:Idata){
    this.id = id
    this.tag = data.tag
  }
}