import { beforeEach, describe, expect, it } from "vitest";
import { CreateRingUseCase, type CreateRingRequestDTO } from "./create-ring-use-case";
import { mockSaveRingRepository } from "../repostitories/__mocks__/save-ring-repository";
import { mockFindRingByForgedByRepo } from "../repostitories/__mocks__/find-ring-by-forged-by-repositorie";
import { Ring } from "../../enterprise/model/ring";
import type { forgedBy } from "../../enterprise/types/forgedBy";
let sut:CreateRingUseCase
describe('create-ring-use-case',()=>{
  beforeEach(()=>{
    sut = new CreateRingUseCase(mockSaveRingRepository,mockFindRingByForgedByRepo)
  })
  describe('save new ring',async()=>{
    it('Deve ser possivel criar um novo Ring',async()=>{
      const input = createInput()
      mockFindRingByForgedByRepo.findRingByForgedBy.mockResolvedValue([])
      const {name,forgedBy,imageURL,power,userId} = input
      const ring = new Ring({name,power,forgedBy,imageURL,userId})
      mockSaveRingRepository.saveRing.mockResolvedValue(ring);
      const res = await sut.execute(input)
      expect(res).toBeInstanceOf(Ring);
      expect(res).toHaveProperty('id');
      expect(res.getId).toBeDefined();
    })
  })
  describe('Deve checar a quantidade de rings forjados por:',async ()=>{
    it('Elfos, max = 3',async()=>{
      const forged:forgedBy = "Elfos"
      const input = createInput(forged)
      const ringsForgedsByElfos = seedArray(forged,3)
      mockFindRingByForgedByRepo.findRingByForgedBy.mockResolvedValue(ringsForgedsByElfos)
      await expect(sut.execute(input)).rejects.toThrow('O limite de anéis para Elfos já foi atingido.');
    })
    it('Anoes, max = 7',async()=>{
      const forged:forgedBy = "Anoes"
      const input = createInput(forged)
      const ringsForgedsByElfos = seedArray(forged,7)
      mockFindRingByForgedByRepo.findRingByForgedBy.mockResolvedValue(ringsForgedsByElfos)
      await expect(sut.execute(input)).rejects.toThrow('O limite de anéis para Anoes já foi atingido.');
    })
   
    it('Homens max = 9',async()=>{
      const forged:forgedBy = "Homens"
      const input = createInput(forged)
      const ringsForgedsByElfos = seedArray(forged,9)
      mockFindRingByForgedByRepo.findRingByForgedBy.mockResolvedValue(ringsForgedsByElfos)
      await expect(sut.execute(input)).rejects.toThrow('O limite de anéis para Homens já foi atingido.');
    })
    it('Sauron max = 1',async()=>{
      const input = createInput("Sauron")
      const forged:forgedBy = "Sauron"
      const ringsForgedsByElfos = seedArray(forged,1)
      mockFindRingByForgedByRepo.findRingByForgedBy.mockResolvedValue(ringsForgedsByElfos)
      await expect(sut.execute(input)).rejects.toThrow('O limite de anéis para Sauron já foi atingido.');
    })
  })

})

function createInput(forgedBy?: forgedBy):CreateRingRequestDTO {
  return {
    name: 'teste',
    power: 'invisible',
    forgedBy:forgedBy??'Elfos',
    imageURL: 'https://colegiopedroerafael.com.br/wp-content/uploads/2018/10/fake-news-374688.jpg',
    userId:'75b2d8ab-c719-4a9b-953f-f91c4db1f20a'
  }
}

function seedArray(forgedBy: forgedBy, limit:number) {
  let rings:Ring[] = []
  const input = createInput(forgedBy)
  for (let index = 0; index <= limit; index++) {
    const ring = new Ring(input)    
    rings.push(ring)
  }
  return rings
}