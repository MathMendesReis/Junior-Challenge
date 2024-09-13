import type { RingRepository } from "../repostitories/ring-repository";

export class ListRingsUseCase{
  constructor(private readonly ringRepository:RingRepository){}

  async execute() {
    return await this.ringRepository.rings()
  }
}