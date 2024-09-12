import { expect, test, describe, beforeEach } from 'vitest';
import { CreateRingUseCase, type CreateRingRequestDTO } from './create-ring-use-case';
import { InMemoryRingDatabase } from '../../../../infra/database/in-memory/in-memory-ring-database';

describe('Create Ring use case (unit)', async () => {
  let inMemoryRepository: InMemoryRingDatabase;
  let sut: CreateRingUseCase;

  beforeEach(() => {
    inMemoryRepository = new InMemoryRingDatabase();
    sut = new CreateRingUseCase(inMemoryRepository);
  });

  test('should create a new Ring when provided with valid input data', async () => {
    const requestData: CreateRingRequestDTO = {
      name: 'One Ring',
      power: 'Invisibility',
      forgedBy: 'Elfos',
      imageURL: 'http://example.com/one-ring.jpg',
    };
    const result = await sut.execute(requestData);
    expect(result).toHaveProperty('id');
    expect(result.getProps.name).toEqual(requestData.name);
  });

  test('should throw an error when the limit of rings for a race is reached (Elfos)', async () => {
    const requestDTO: CreateRingRequestDTO = {
      name: 'Ring of Power',
      power: 'Invisibility',
      forgedBy: 'Elfos',
      imageURL: 'http://image.url',
    };

    for (let index = 0; index < 3; index++) {
      await sut.execute(requestDTO);
    }

    await expect(() => sut.execute(requestDTO)).rejects.toThrowError(
      'O limite de anéis para Elfos já foi atingido.'
    );
  });
});