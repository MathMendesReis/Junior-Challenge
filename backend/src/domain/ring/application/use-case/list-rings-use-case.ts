import type { FindAllRingsRepository } from "../repostitories/FindAllRingsRepository";

export class ListRingsUseCase{
  constructor(private readonly findAllRings:FindAllRingsRepository){}

  async execute() {
    return await this.findAllRings.findAllRings()
  }
}