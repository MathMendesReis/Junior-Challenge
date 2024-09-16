import { Ring, type RingProps } from "../../enterprise/model/ring";
import type { RingRepository } from "../repostitories/ring-repository";
import type { forgedBy } from "../../enterprise/types/forgedBy";
import { AppError } from "../../../../infra/utils/app-error";
import type { RingDB } from "../../../../infra/database/orm/entitie/ring-entitie";


export interface updateRingRequestDTO{
  id:string
  name?: string;
  power?: string;
  forgedBy?: forgedBy;
  imageURL?: string;
}
export class UpdateRingUseCase{
  constructor(private readonly ringRepository:RingRepository){}
  async execute({id,forgedBy,imageURL,name,power}:updateRingRequestDTO){
    const existingRings = await this.ringRepository.findRingById(id)

    if(existingRings.length === 0){
      throw new AppError('Not found', 404)
    }
    const [ring] = existingRings
    const userId = ring.userId
    const update = Ring.create({
      name:name ?? ring.name,
      power:power ?? ring.power,
      forgedBy:forgedBy ?? ring.forgedBy,
      imageURL:imageURL ?? ring.power,
      userId
    })
    await this.ringRepository.updateRingById(id, update)
    return {
      message:'sucess'
    }
  }
}