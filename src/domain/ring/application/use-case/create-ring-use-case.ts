import { Ring, type RingProps } from "../../enterprise/model/ring";
import type { RingRepository } from "../repostitories/ring-repository";
import type { forgedBy } from "../../enterprise/types/forgedBy";
import { AppError } from "../../../../infra/utils/app-error";
import type { RingDB } from "../../../../infra/database/orm/entitie/ring-entitie";


export interface CreateRingRequestDTO{
  name: string;
  power: string;
  forgedBy: forgedBy;
  imageURL: string;
  userId:string
}
export class CreateRingUseCase{
  constructor(private readonly ringRepository:RingRepository){}
  async execute({name,power,forgedBy,imageURL,userId}:CreateRingRequestDTO){
    const existingRings = await this.ringRepository.findRingByForgedBy(userId,forgedBy)
    if (existingRings.length > 0) {
      // - **Elfos**: No máximo 3 anéis.
      if (forgedBy === 'Elfos' && existingRings.length >= 3) {
        throw new AppError(`O limite de anéis para ${forgedBy} já foi atingido.`, 409);
      }
      // - **Anões**: No máximo 7 anéis.
      if (forgedBy === 'Anoes' && existingRings.length >= 7) {
        throw new AppError(`O limite de anéis para ${forgedBy} já foi atingido.`, 409);
      }
      // - **Homens**: No máximo 9 anéis.
      if (forgedBy === 'Homens' && existingRings.length >= 9) {
        throw new AppError(`O limite de anéis para ${forgedBy} já foi atingido.`, 409);
      }
      // - **Sauron**: Apenas 1 anel.
      if (forgedBy === 'Sauron' && existingRings.length >= 1) {
        throw new AppError(`O limite de anéis para ${forgedBy} já foi atingido.`, 409);
      }
    }
    const newRing = Ring.create({name,power,forgedBy,imageURL,userId})
    return await this.ringRepository.saveRing(newRing)
  }
}