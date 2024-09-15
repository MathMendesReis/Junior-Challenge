import type { RingDB } from "../../../../infra/database/orm/entitie/ring-entitie";
import type { RingRepository } from "../repostitories/ring-repository";

export class ListRingsUseCase{
  constructor(private readonly ringRepository:RingRepository<RingDB>){}

  async execute() {
    return await this.ringRepository.findAllRings()
  }
}