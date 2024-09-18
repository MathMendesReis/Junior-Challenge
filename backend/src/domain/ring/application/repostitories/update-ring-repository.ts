import { mock } from "vitest-mock-extended";
import type { Ring } from "../../enterprise/model/ring";

export abstract class UpdateRingByIdRepository{
  abstract updateRingById: (ring: Ring) => Promise<void>;
}

export const MockUpdateRingByIdRepository = mock<UpdateRingByIdRepository>()



