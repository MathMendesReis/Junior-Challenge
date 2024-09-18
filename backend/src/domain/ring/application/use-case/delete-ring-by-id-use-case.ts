import { AppError } from "../../../../infra/utils/app-error";
import type { DeleteRingByIdRepository } from "../repostitories/DeleteRingByIdRepository";
import type { FindRingByIdRepository } from "../repostitories/find-ring-by-id-repository";

export class DeleteRingByIdUseCase{
  constructor(
    private readonly findRingByIdRepository:FindRingByIdRepository,
    private readonly deleteRingByIdRepository:DeleteRingByIdRepository
  ){}

  async execute(id: string){
    const ring = await this.findRingByIdRepository.findRingById(id)
    if(!ring){
      throw new AppError("Ring not found", 404)
    }
    await this.deleteRingByIdRepository.deleteRingById(ring.getId.toString())
    return {
      message: "sucess"
    }
  }
}

