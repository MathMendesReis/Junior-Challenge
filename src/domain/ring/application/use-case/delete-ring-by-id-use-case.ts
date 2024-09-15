import type { RingDB } from "../../../../infra/database/orm/entitie/ring-entitie";
import { AppError } from "../../../../infra/utils/app-error";
import type { RingRepository } from "../repostitories/ring-repository";

export class DeleteRingByIdUseCase{
  constructor(private readonly ringRepository:RingRepository){}

  async execute(id: string){
    const ring = await this.ringRepository.findRingById(id)
    if(ring.length === 0){
      throw new AppError("Ring not found", 404)
    }
    await this.ringRepository.deleteRingById(ring[0].id)
    return {
      message: "sucess"
    }
  }
}