import  { Ring } from "../../../../domain/ring/enterprise/model/ring";
import  { RingEntity } from "../entitie/ring-entitie";

export class RingsToTypeORMMapper{
  static toDomain(raw: RingEntity):Ring  {
    if (!raw.id) {
      throw new Error('Invalid attachment type.')
    }
    return new Ring({
      id: raw.id,
      name: raw.name,
      power: raw.power,
      forgedBy: raw.forgedBy,
      imageURL: raw.imageURL,
      userId: raw.userId
    })


  }

}