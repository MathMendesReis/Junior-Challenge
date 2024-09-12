import { expect, test, describe, beforeEach } from 'vitest';
import { CreateRingUseCase, type CreateRingRequestDTO } from './create-ring-use-case';
import { InMemoryRingDatabase } from '../../../../infra/database/in-memory/in-memory-ring-database';
import  { ListRingsUseCase } from './list-rings-use-case';

describe('List Ring use case (unit)', async () => {
  let inMemoryRepository: InMemoryRingDatabase;
  let sut: ListRingsUseCase;

  beforeEach(() => {
    inMemoryRepository = new InMemoryRingDatabase();
    sut = new ListRingsUseCase(inMemoryRepository);
  });

  test('should create and save a new ring when no existing ringsshould create and save a new ring when no existing rings are found for the given forgedBy found for the given forgedBy', async () => {
  
    const result = await sut.execute();
    console.log(result)
  });

 
});