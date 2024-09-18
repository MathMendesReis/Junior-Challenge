import {  Repository } from 'typeorm';
import { myDataSource } from '../config/ormconfig';
import type { forgedBy } from '../../../../domain/ring/enterprise/types/forgedBy';
import type { Ring } from '../../../../domain/ring/enterprise/model/ring';
import type { updateRingRequestDTO } from '../../../../domain/ring/application/use-case/update-rings-use-case';
import { RingEntity } from '../entitie/ring-entitie';
import type { SaveRingRepository } from '../../../../domain/ring/application/repostitories/save-ring-repository';
import { RingsToTypeORMMapper } from '../mappers/RingsToTypeORMMapper';
import Typeorm from './Typeorm';

export default class TypeormSaveRingsRepo extends Typeorm implements SaveRingRepository {
 
   saveRing = async (ring: Ring):Promise<Ring> => {
     const save = await this.ormRepository.save({
      id:ring.getId,
      name: ring.getName,
      power: ring.getPower,
      forgedBy: ring.getForgedBy,
      imageURL: ring.getImageUrl,
      userId: ring.getUserId
     })
     return RingsToTypeORMMapper.toDomain(save)
   }

}