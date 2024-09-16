import type { RingDB } from "../../../../infra/database/orm/entitie/ring-entitie";
import type { Ring } from "../../enterprise/model/ring";
import type { forgedBy } from "../../enterprise/types/forgedBy";

export abstract class RingRepository<T = RingDB>{
  abstract findRingByForgedBy: (userId:string,forgedBy: forgedBy) => Promise<T[]|undefined>;
  abstract saveRing: (ring: Ring) => Promise<T>;
  abstract findAllRings: () => Promise<T[]>
  abstract deleteRingById: (id:string) => Promise<void>;
  abstract findRingById: (id:string) => Promise<T[]>;
  abstract updateRingById: (id:string,ring: Ring) => Promise<void>;

}
