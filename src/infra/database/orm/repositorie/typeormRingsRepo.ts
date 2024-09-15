import {  Repository } from 'typeorm';
import type { RingRepository } from '../../../../domain/ring/application/repostitories/ring-repository';
import { myDataSource } from '../config/ormconfig';
import type { forgedBy } from '../../../../domain/ring/enterprise/types/forgedBy';
import { RingDB } from '../entitie/ring-entitie';
import type { Ring } from '../../../../domain/ring/enterprise/model/ring';
import type { updateRingRequestDTO } from '../../../../domain/ring/application/use-case/update-rings-use-case';

export default class TypeormRingsRepo implements RingRepository {
  private ormRepository: Repository<RingDB>;

  constructor() {
    this.ormRepository = myDataSource.getRepository(RingDB);
  }
  async updateRingById(id:string,ring: Ring){
    this.ormRepository.update(id,ring.getProps)
  };
 
  async findRingById (id:string) {
    return await this.ormRepository.find({
      where:{
       id
      }
    })
  }
  findRingByForgedBy = async (userId:string,forgedBy: forgedBy) => {
     return await this.ormRepository.find({
       where:{
        userId,
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
   async deleteRingById(id:string){
    await this.ormRepository.delete(id)
    return 
   }
}