import {  Repository } from 'typeorm';
import { myDataSource } from '../config/ormconfig';
import type { forgedBy } from '../../../../domain/ring/enterprise/types/forgedBy';
import type { Ring } from '../../../../domain/ring/enterprise/model/ring';
import type { updateRingRequestDTO } from '../../../../domain/ring/application/use-case/update-rings-use-case';
import { RingEntity } from '../entitie/ring-entitie';
import type { SaveRingRepository } from '../../../../domain/ring/application/repostitories/save-ring-repository';
import { RingsToTypeORMMapper } from '../mappers/RingsToTypeORMMapper';

export default class TypeormRingsRepo implements SaveRingRepository {
  private ormRepository: Repository<RingEntity>;

  constructor() {
    this.ormRepository = myDataSource.getRepository(RingEntity);
  }
  // async updateRingById(id:string,ring: Ring){
  //   this.ormRepository.update(id,ring.getProps)
  // };
 
  // async findRingById (id:string) {
  //   return await this.ormRepository.find({
  //     where:{
  //      id
  //     }
  //   })
  // }
  // findRingByForgedBy = async (userId:string,forgedBy: forgedBy) => {
  //    return await this.ormRepository.find({
  //      where:{
  //       userId,
  //       forgedBy
  //      }
  //    })
  //  }

 
   saveRing = async (ring: Ring):Promise<Ring> => {
     const save = await this.ormRepository.save({
      id:ring.getId.toString(),
      name: ring.getName,
      power: ring.getPower,
      forgedBy: ring.getForgedBy,
      imageURL: ring.getImageUrl,
      userId: ring.getUserId
     })

     return RingsToTypeORMMapper.toDomain(save)
   }


  //  async findAllRings(){
  //   const result = await this.ormRepository.find()
  //   return result
  //  }
  //  async deleteRingById(id:string){
  //   await this.ormRepository.delete(id)
  //   return 
  //  }
}