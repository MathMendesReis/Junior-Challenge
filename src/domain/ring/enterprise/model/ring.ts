import { Entity } from "../../../../core/entity";
import type { UniqueEntityId } from "../../../../core/unique-entity";
import type { forgedBy } from "../types/forgedBy";

export interface RingProps{
  id?: string;
  name: string;
  power: string;
  forgedBy: forgedBy;
  imageURL: string;
  userId:string
}
export class Ring extends Entity<RingProps> {

  static create(
    props: RingProps,
    id?: UniqueEntityId,
  ) {
    const ring = new Ring(
      {
        ...props,
      },
      id,
    )

    return ring
  }
}