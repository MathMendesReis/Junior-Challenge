import {  Repository } from 'typeorm';
import type { RingRepository } from '../../../../domain/ring/application/repostitories/ring-repository';
import { myDataSource } from '../config/ormconfig';
import type { forgedBy } from '../../../../domain/ring/enterprise/types/forgedBy';
import { RingDB } from '../entitie/ring-entitie';
import type { Ring } from '../../../../domain/ring/enterprise/model/ring';

export default class TypeormRingsRepo implements RingRepository {
  private ormRepository: Repository<RingDB>;

  constructor() {
    this.ormRepository = myDataSource.getRepository(RingDB);
  }
   findBookByForgedBy = async (forgedBy: forgedBy) => {
     return await this.ormRepository.findOne({
       where:{
        forgedBy
       }
     })
   }

 
   saveRing = async (ring: Ring) => {
     return await this.ormRepository.save(ring.getProps)
   }


   async findAllRings(){
    const result = await this.ormRepository.find()
    return result
   }
}