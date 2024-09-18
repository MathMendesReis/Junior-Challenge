import {  Repository } from 'typeorm';
import { myDataSource } from '../config/ormconfig';
import type { forgedBy } from '../../../../domain/ring/enterprise/types/forgedBy';
import type { Ring } from '../../../../domain/ring/enterprise/model/ring';
import type { updateRingRequestDTO } from '../../../../domain/ring/application/use-case/update-rings-use-case';
import { RingEntity } from '../entitie/ring-entitie';
import type { SaveRingRepository } from '../../../../domain/ring/application/repostitories/save-ring-repository';
import { RingsToTypeORMMapper } from '../mappers/RingsToTypeORMMapper';
import type { FindRingByForgedBy } from '../../../../domain/ring/application/repostitories/find-ring-by-forged-by-repositorie';
import Typeorm from './Typeorm';

export default class TypeormfindRingByForgedByRepo extends Typeorm implements FindRingByForgedBy {
 
  async findRingByForgedBy(userId: string, forgedBy: forgedBy):Promise<Ring[] | null> {
    const search = await this.ormRepository.find({
      where:{
        userId,forgedBy
      }
    })
    if (!search) {
        return null
    }
    return search.map((entity)=> RingsToTypeORMMapper.toDomain(entity))

  }


  

}