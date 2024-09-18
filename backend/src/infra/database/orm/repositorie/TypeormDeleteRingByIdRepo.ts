import type { DeleteRingByIdRepository } from "../../../../domain/ring/application/repostitories/DeleteRingByIdRepository";
import Typeorm from "./Typeorm";

export class TypeormDeleteRingByIdRepo extends Typeorm implements DeleteRingByIdRepository{

  async deleteRingById(id: string){
    await this.ormRepository.delete(id)
  }
}