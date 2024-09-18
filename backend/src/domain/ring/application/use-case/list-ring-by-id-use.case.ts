import type { FindRingByIdRepository } from "../repostitories/find-ring-by-id-repository";

export class ListRingByIdUseCase{
  constructor(
    private readonly findRingById:FindRingByIdRepository

  ){}

  async execute(id:string) {
    const res = await this.findRingById.findRingById(id)
    if(res)
    return await this.findRingById.findRingById(id)
  }
}