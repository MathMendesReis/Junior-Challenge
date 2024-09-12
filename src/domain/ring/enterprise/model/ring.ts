import { Entity } from "../../../../core/entity";

export interface RingProps{
  id: string;
  name: string;
  power: string;
  forgedBy: string;
  imageURL: string;
}
export class Ring extends Entity<RingProps> {

}