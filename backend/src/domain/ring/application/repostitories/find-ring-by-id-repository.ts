import type { Ring } from "../../enterprise/model/ring";
import { mock } from 'vitest-mock-extended';

export abstract class FindRingByIdRepository{
  abstract findRingById: (id:string) => Promise<Ring|null>;
}

export const MockFindRingByIdRepository = mock<FindRingByIdRepository>()