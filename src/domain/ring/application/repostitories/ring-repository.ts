import type { Ring } from "../../enterprise/model/ring";
import type { forgedBy } from "../../enterprise/types/forgedBy";

export abstract class RingRepository{
  abstract save(data: Ring): Promise<Ring>;
  abstract existingRings(data: forgedBy): Promise<Ring[]|null>;
  abstract rings(): Promise<Ring[]>;
  abstract deleteById(id:string): Promise<void>;

}
