import {  Repository } from 'typeorm';
import { myDataSource } from '../config/ormconfig';
import type { forgedBy } from '../../../../domain/ring/enterprise/types/forgedBy';
import type { Ring } from '../../../../domain/ring/enterprise/model/ring';
import type { updateRingRequestDTO } from '../../../../domain/ring/application/use-case/update-rings-use-case';
import { RingEntity } from '../entitie/ring-entitie';
import type { SaveRingRepository } from '../../../../domain/ring/application/repostitories/save-ring-repository';
import { RingsToTypeORMMapper } from '../mappers/RingsToTypeORMMapper';
import type { FindRingByForgedBy } from '../../../../domain/ring/application/repostitories/find-ring-by-forged-by-repositorie';
import type { FindAllRingsRepository } from '../../../../domain/ring/application/repostitories/FindAllRingsRepository';
import Typeorm from './Typeorm';

export default class TypeormFindAllRingsRepo extends Typeorm implements FindAllRingsRepository {
  async findAllRings():Promise<Ring[]>{
    const res = await this.ormRepository.find()
    return res.map((entity)=> RingsToTypeORMMapper.toDomain(entity))
  }
  
}