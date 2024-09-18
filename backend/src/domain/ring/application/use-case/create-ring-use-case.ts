import { Ring, type RingProps } from "../../enterprise/model/ring";
import type { forgedBy } from "../../enterprise/types/forgedBy";
import { AppError } from "../../../../infra/utils/app-error";
import type { SaveRingRepository } from "../repostitories/save-ring-repository";
import type { FindRingByForgedBy } from "../repostitories/find-ring-by-forged-by-repositorie";


export interface CreateRingRequestDTO{
  name: string;
  power: string;
  forgedBy: forgedBy;
  imageURL: string;
  userId:string
}
export class CreateRingUseCase{
  constructor(
    private readonly saveRingRepository:SaveRingRepository,
    private readonly findRingByForgedBy:FindRingByForgedBy,
  ){}
  async execute({name,power,forgedBy,imageURL,userId}:CreateRingRequestDTO):Promise<Ring>{
    const existingRings = await this.findRingByForgedBy.findRingByForgedBy(userId,forgedBy)
    this.checkRingLimits(existingRings,forgedBy)
    const ring = new Ring({name,power,forgedBy,imageURL,userId})
    const result = await this.saveRingRepository.saveRing(ring)
    return result
  }

  private checkRingLimits(existingRings: Ring[], forgedBy: forgedBy){
    if (existingRings.length > 0) {
      if (forgedBy === 'Elfos' && existingRings.length > 3) {
        throw new AppError(`O limite de anéis para ${forgedBy} já foi atingido.`, 409);
      }
      if (forgedBy === 'Anoes' && existingRings.length > 7) {
        throw new AppError(`O limite de anéis para ${forgedBy} já foi atingido.`, 409);
      }
      if (forgedBy === 'Homens' && existingRings.length > 9) {
        throw new AppError(`O limite de anéis para ${forgedBy} já foi atingido.`, 409);
      }
      if (forgedBy === 'Sauron' && existingRings.length > 1) {
        throw new AppError(`O limite de anéis para ${forgedBy} já foi atingido.`, 409);
      }
    }
  }
}