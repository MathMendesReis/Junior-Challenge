import { Ring, type RingProps } from "../../enterprise/model/ring";
import type { RingRepository } from "../repostitories/ring-repository";
import type { forgedBy } from "../../enterprise/types/forgedBy";


export interface CreateRingRequestDTO{
  name: string;
  power: string;
  forgedBy: forgedBy;
  imageURL: string;
}
export class CreateRingUseCase{
  constructor(private readonly ringRepository:RingRepository){}


  async execute({name,power,forgedBy,imageURL}:CreateRingRequestDTO):Promise<Ring>{
    const existingRings = await this.ringRepository.existingRings(forgedBy)

    if (existingRings !== null) {
      throw new Error(`O limite de anéis para ${forgedBy} já foi atingido.`);
    }
   
    const newRing = Ring.create({name,power,forgedBy,imageURL})

    return await this.ringRepository.save(newRing)
  }
}