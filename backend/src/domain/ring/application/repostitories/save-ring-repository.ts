import type { Ring } from "../../enterprise/model/ring";

export abstract class SaveRingRepository {
  abstract saveRing: (ring: Ring) => Promise<Ring>;
}