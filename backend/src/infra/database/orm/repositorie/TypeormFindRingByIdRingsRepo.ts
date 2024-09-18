import type { FindRingByIdRepository } from "../../../../domain/ring/application/repostitories/find-ring-by-id-repository";
import type { Ring } from "../../../../domain/ring/enterprise/model/ring";
import { RingsToTypeORMMapper } from "../mappers/RingsToTypeORMMapper";
import Typeorm from "./Typeorm";

export default class TypeormFindRingByIdRingsRepo extends Typeorm implements FindRingByIdRepository{
  async findRingById(id:string):Promise<Ring|null>{
    const res = await this.ormRepository.findOne({
      where:{
        id
      }
    })
    if(!res){
      return null
    }
    return  RingsToTypeORMMapper.toDomain(res)

  }
}

// TypeormDeleteRingByIdRepo.ts
