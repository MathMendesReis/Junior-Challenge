import type { Ring } from "../../enterprise/model/ring";

export abstract class FindAllRingsRepository {
  abstract findAllRings: () => Promise<Ring[]>;
}
