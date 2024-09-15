import type { RingDB } from "../../../../infra/database/orm/entitie/ring-entitie";
import type { Ring } from "../../enterprise/model/ring";
import type { forgedBy } from "../../enterprise/types/forgedBy";

export abstract class RingRepository{
  abstract findBookByForgedBy: (forgedBy: forgedBy) => Promise<RingDB|undefined>;
  abstract saveRing: (book: Ring) => Promise<RingDB>;
  abstract findAllRings: () => Promise<RingDB[]>
}
