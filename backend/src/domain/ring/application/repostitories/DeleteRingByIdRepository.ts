import { mock } from 'vitest-mock-extended';
export abstract class DeleteRingByIdRepository {
  abstract deleteRingById: (id: string) => Promise<void>;
}


export const MockDeleteRingByIdRepository = mock<DeleteRingByIdRepository>();
