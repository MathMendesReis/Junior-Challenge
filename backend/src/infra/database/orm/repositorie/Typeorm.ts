import type { Repository } from "typeorm";
import { myDataSource } from "../config/ormconfig";
import { RingEntity } from "../entitie/ring-entitie";

export default abstract class Typeorm  {
  private _ormRepository: Repository<RingEntity>;
  constructor() {
    this._ormRepository = myDataSource.getRepository(RingEntity);
  }

  public get ormRepository(){
    return this._ormRepository
  }
  
}