import type { forgedBy } from "../types/forgedBy";
import { randomUUID } from 'node:crypto'

export interface RingProps{
  id?: string;
  name: string;
  power: string;
  forgedBy: forgedBy;
  imageURL: string;
  userId:string
}
export class Ring {
  private id: string;
  private name: string;
  private power: string;
  private forgedBy: forgedBy;
  private imageURL: string;
  private userId:string
  constructor({forgedBy,imageURL,name,power,userId,id}:RingProps){
    this.id = id ?? randomUUID()
    this.name = name,
    this.power = power,
    this.forgedBy = forgedBy,
    this.imageURL = imageURL,
    this.userId = userId
  }
  public get getId(){
    return this.id
  }
 
  public get getName(){
    return this.name
  }
  public get getPower(){
    return this.power
  }
  public get getForgedBy(){
    return this.forgedBy
  }
  public get getImageUrl(){
    return this.imageURL
  }
  public get getUserId(){
    return this.userId
  }
  
}