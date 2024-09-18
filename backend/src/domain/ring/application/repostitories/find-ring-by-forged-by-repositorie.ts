import type { Ring } from "../../enterprise/model/ring";
import type { forgedBy } from "../../enterprise/types/forgedBy";

export abstract class FindRingByForgedBy {
  abstract findRingByForgedBy: (userId:string,forgedBy: forgedBy) => Promise<Ring[]|null>;
}

