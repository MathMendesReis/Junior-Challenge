import { expect, test,describe, beforeEach } from 'vitest'
import { CreateRingUseCase, type CreateRingRequestDTO } from './create-ring-use-case'
import { it } from 'node:test'
import { InMemoryRingDatabase } from '../../../../infra/database/in-memory/in-memory-ring-database'


describe('Create Ring use case (unit)',async ()=>{
  const inMemoryRepository = new InMemoryRingDatabase()
  const sut = new CreateRingUseCase(inMemoryRepository)

  test('should create a new Ring when provided with valid input data', async () => {
    const requestData:CreateRingRequestDTO = {
      name: 'One Ring',
      power: 'Invisibility',
      forgedBy: 'Elfos',
      imageURL: 'http://example.com/one-ring.jpg'
    };
    const result = await  sut.execute(requestData);
    expect(result).toHaveProperty('id')
    expect(result.getProps.name).toEqual(requestData.name)
  });
    
  it('should create a new ring when no existing rings are found for the given forgedBy', async () => {

    const requestDTO1:CreateRingRequestDTO = {
      name: 'Ring of Power',
      power: 'Invisibility',
      forgedBy: 'Elfos',
      imageURL: 'http://image.url'
    };
    // for (let index = 0; index < 2; index++) {
    //   await  sut.execute(requestDTO1);
    // }
    // await expect(() => sut.execute(requestDTO1)).rejects.toThrowError(`O limite de anéis para ${requestDTO1.forgedBy} já foi atingido.`)
  });

})
