import { aw } from "vitest/dist/chunks/reporters.C_zwCd4j";
import type { UpdateRingByIdRepository } from "../../../../domain/ring/application/repostitories/update-ring-repository";
import type { Ring } from "../../../../domain/ring/enterprise/model/ring";
import Typeorm from "./Typeorm";

export class TypeormUpdateRIngRepo extends Typeorm implements UpdateRingByIdRepository{
  async updateRingById(ring: Ring):Promise<void>{
    await this.ormRepository.update(ring.getId,{
      name: ring.getName,
      power: ring.getPower,
      forgedBy: ring.getForgedBy,
      imageURL: ring.getImageUrl,
      userId: ring.getUserId
     })
  }
}